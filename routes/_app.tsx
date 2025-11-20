import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  const count = useSignal(3);

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>deno-fresh-repro-css-modules</title>
      </head>
      <body>
        <Component />
        <Counter count={count} />
      </body>
    </html>
  );
});
