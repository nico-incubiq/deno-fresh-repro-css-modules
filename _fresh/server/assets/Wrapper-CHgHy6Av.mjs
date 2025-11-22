import { a, l, u } from "../server-entry.mjs";
const bar = "_bar_1eb6i_1";
const style$2 = {
  bar
};
const $$_tpl_1$4 = ["<div ", ">This is a RED Bar component, imported by both Foo and the index page.</div>"];
function Bar() {
  return a($$_tpl_1$4, l("class", style$2.bar));
}
const $$_tpl_1$3 = ["<div>", "</div>"];
function Foo() {
  return a($$_tpl_1$3, u(Bar, null));
}
const qux = "_qux_1n1xy_1";
const style$1 = {
  qux
};
const $$_tpl_1$2 = ["<div ", ">This is a GREEN Qux component, imported by both the index page and page 1.</div>"];
function Qux() {
  return a($$_tpl_1$2, l("class", style$1.qux));
}
const wrapped = "_wrapped_1s77c_1";
const style = {
  wrapped
};
const $$_tpl_1$1 = ["<div ", ">This is a YELLOW Wrapped component, imported only by the Wrapper component.</div>"];
function Wrapped() {
  return a($$_tpl_1$1, l("class", style.wrapped));
}
const $$_tpl_1 = ["<div>", "</div>"];
function Wrapper() {
  return a($$_tpl_1, u(Wrapped, null));
}
export {
  Foo as F,
  Qux as Q,
  Wrapper as W
};
