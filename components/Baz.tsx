import style from "./Baz.module.css";

export default function Baz() {
    return (
        <div class={style.baz}>
            This is a BLUE Baz component, imported only by page 1.
        </div>
    );
}
