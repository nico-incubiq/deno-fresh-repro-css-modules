import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Foo from "../components/Foo.tsx";
import Qux from "../components/Qux.tsx";
import Wrapper from "../components/Wrapper.tsx";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <a href="/page1">Go to Page 1</a>
      <Foo />
      <Qux />
      <Wrapper />
    </>
  );
});
