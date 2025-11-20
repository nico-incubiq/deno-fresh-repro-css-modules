import style from "./Qux.module.css";

export default function Qux() {
    return (
        <div class={style.qux}>
            This is a GREEN Qux component, imported by both the index page and page 1.
        </div>
    );
}
