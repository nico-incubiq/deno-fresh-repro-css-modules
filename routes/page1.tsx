import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Bar from "../components/Bar.tsx";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>Page 1</title>
      </Head>
      <a href="/">Go to index</a>
      <Bar />
    </>
  );
});
