# Fresh 2 CSS Module issue reproduction

This is a Deno Fresh 2 project aimed at reproducing errors with CSS Modules.
- The first one is when a component that uses CSS Modules is imported in
multiple places, `dev` and `build` modes have issues with importing its CSS.
- The second one is when an island is imported directly into the `_app.tsx`
file (e.g. a menu bar, ...), its CSS Module's asset is not injected into the
generated HTML head.
- Finally, the `build` command reports an incorrect location for generated CSS
assets, under `_fresh/server/assets/`  instead of the actual
`_fresh/client/assets/`.

## Reproduction issue 1
### Dev mode
In dev mode, the CSS Module of components imported in multiple places will only
work in the first page accessed (it probably gets inlined there?).

Steps to reproduce:
- Run `deno task dev`
- Access [index](http://localhost:5173/)
  - ✅ notice that `Bar` is <span style="color:red">RED</span>
  - ✅ notice that `Qux` is <span style="color:green">GREEN</span>
  - ✅ notice that `Wrapped` is <span style="color:yellow">YELLOW</span>
- Access [/page1](http://localhost:5173/page1)
  - ❌ notice that `Bar` is not RED
  - ✅ notice that `Baz` is <span style="color:blue">BLUE</span>
  - ❌ notice that `Qux` is not GREEN
  - ❌ notice that `Wrapped` is not YELLOW

Stop the server and now do the **opposite**:
- Run `deno task dev`
- Access [/page1](http://localhost:5173/page1)
  - ✅ notice that `Bar` is <span style="color:red">RED</span>
  - ✅ notice that `Baz` is <span style="color:blue">BLUE</span>
  - ✅ notice that `Qux` is <span style="color:green">GREEN</span>
  - ✅ notice that `Wrapped` is <span style="color:yellow">YELLOW</span>
- Access [index](http://localhost:5173/)
  - ❌ notice that `Bar` is not RED
  - ❌ notice that `Qux` is not GREEN
  - ❌ notice that `Wrapped` is not YELLOW

### Prod mode
In prod mode, CSS Modules of components used in multiple places is not even
imported, while CSS Modules of components used in a single place is inlined.

Steps to reproduce:
- Run `deno task build`
- Notice the output shows some CSS was compiled into **server** assets.
  ```
  _fresh/server/assets/_fresh-route___page1-C5eeBO7K.css
  _fresh/server/assets/Wrapper-5d7XTgkZ.css
  ```
  - ❌ This is incorrect, those files are actually generated under `_fresh/client/assets/`
  - Open `Wrapper-5d7XTgkZ.css`, this actually contains the CSS for all 3 components imported in multiple places:
    ```css
    ._bar_1eb6i_1{color:red}._qux_1n1xy_1{color:green}._wrapped_1s77c_1{color:#ff0}
    ```
  - Open `_fresh-route___page1-C5eeBO7K.css`, this contains the inlined CSS for the component imported in only one place:
    ```css
    ._baz_1yfcd_1{color:#00f}
    ```
- Run `deno task start`
- Access both [index](http://localhost:8000/) and [/page1](http://localhost:8000/page1)
  - ❌ Notice that neither `Bar`, `Qux` or `Wrapped` is colored
  - ✅ notice the `Baz` is <span style="color:blue">BLUE</span>

## Expected behaviour issue 1
### Dev mode
In dev mode, the inlining is too aggressive; upon seeing a CSS Module for the
first time it seems to be assumed it's only used in that one place and gets
inlined into this page, which breaks further pages that may depend on that same
module.

-> Either the whole project should be scanned to confirm whether this is really
the only place the module is used before inlining, but this might still cause
issues with hot reloading, if changes import this module in a different page?  
-> Or disable inlining altogether in dev mode?

### Build mode
The content of the assets seem correct.  
-> The console output needs to properly reflect the location of the built files
(under `_fresh/client/assets/`).  
-> Those assets need to be imported into the generated pages.

## Reproduction issue 2
During the build, an asset file is created for the island's CSS Module, but
this file is never included in the generated page.

Steps to reproduce:
- Run `deno task build`
- Notice the output shows some CSS was compiled into assets.
  ```
  _fresh/server/assets/server-entry-BjGR1nPk.css
  ```
  - ❌ This is also incorrect, this file is actually generated under `_fresh/client/assets/` (issue 3)
  - Open `server-entry-BjGR1nPk.css`, this correctly contains the CSS for the counter island and its button component:
    ```css
    ._button_4wgk9_1{padding:.25rem .5rem;border:grey 2px solid;border-radius:.125rem;background-color:#fff;transition:background-color .15s ease}._button_4wgk9_1:hover{background-color:#e5e7eb}._counter_1fo9y_1{display:flex;gap:.5rem;padding:.375rem 0}._counter_1fo9y_1>p{font-size:1.875rem;line-height:2.25rem;font-variant-numeric:tabular-nums}
    ```
- Run `deno task start`
- Access both [index](http://localhost:8000/) and [/page1](http://localhost:8000/page1)
  - ❌ Notice that no style is loaded for this island in any page
  - Inspect the HTML of the page, the `<head>` does not contain any `<link>`

## Expected behaviour issue 2
-> Similarly to islands imported by a page, the CSS Module (or
`server-entry.css` asset) of an island imported in `_app.tsx` should be
injected into the generated HTML's `<head>` using a `<link>`.
