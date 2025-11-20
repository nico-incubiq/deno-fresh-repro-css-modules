import style from "./Wrapped.module.css";

export default function Wrapped() {
    return (
        <div class={style.wrapped}>
            This is a YELLOW Wrapped component, imported only by the Wrapper component.
        </div>
    );
}
