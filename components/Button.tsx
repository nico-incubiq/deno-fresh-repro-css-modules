import type { ComponentChildren } from "preact";
import style from "./Button.module.css";

export interface ButtonProps {
  id?: string;
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      class={style.button}
    />
  );
}
