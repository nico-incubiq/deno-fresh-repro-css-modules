import { a, l, d as define, u, H as Head } from "../server-entry.mjs";
import { W as Wrapper, Q as Qux, F as Foo } from "./Wrapper-CHgHy6Av.mjs";
const baz = "_baz_1yfcd_1";
const style = {
  baz
};
const $$_tpl_1$1 = ["<div ", ">This is a BLUE Baz component, imported only by page 1.</div>"];
function Baz() {
  return a($$_tpl_1$1, l("class", style.baz));
}
const $$_tpl_1 = ["", "", "", "", "", "", ""];
const page1 = define.page(function Home() {
  return a($$_tpl_1, u(Head, {
    children: u("title", {
      children: "Page 1"
    })
  }), u("a", {
    href: "/",
    children: "Go to index"
  }), u(Foo, null), u(Baz, null), u(Qux, null), u(Wrapper, null));
});
const routeCss = ["/assets/_fresh-route___page1-C5eeBO7K.css"];
const css = routeCss;
const config = void 0;
const handler = void 0;
const handlers = void 0;
const _freshRoute___page1 = page1;
export {
  config,
  css,
  _freshRoute___page1 as default,
  handler,
  handlers
};
