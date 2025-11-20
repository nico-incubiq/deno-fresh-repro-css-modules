import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import style from "./Counter.module.css";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class={style.counter}>
      <Button id="decrement" onClick={() => props.count.value -= 1}>-1</Button>
      <p>{props.count}</p>
      <Button id="increment" onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
