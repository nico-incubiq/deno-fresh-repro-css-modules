import { d as define, a, u, H as Head } from "../server-entry.mjs";
import { W as Wrapper, Q as Qux, F as Foo } from "./Wrapper-CHgHy6Av.mjs";
const $$_tpl_1 = ["", "", "", "", "", ""];
const index = define.page(function Home() {
  return a($$_tpl_1, u(Head, {
    children: u("title", {
      children: "Index page"
    })
  }), u("a", {
    href: "/page1",
    children: "Go to Page 1"
  }), u(Foo, null), u(Qux, null), u(Wrapper, null));
});
const routeCss = null;
const css = routeCss;
const config = void 0;
const handler = void 0;
const handlers = void 0;
const _freshRoute___index = index;
export {
  config,
  css,
  _freshRoute___index as default,
  handler,
  handlers
};
