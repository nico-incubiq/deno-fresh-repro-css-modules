import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Baz from "../components/Baz.tsx";
import Qux from "../components/Qux.tsx";
import Foo from "../components/Foo.tsx";
import Wrapper from "../components/Wrapper.tsx";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>Page 1</title>
      </Head>
      <a href="/">Go to index</a>
      <Foo />
      <Baz />
      <Qux />
      <Wrapper />
    </>
  );
});
