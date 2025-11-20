import style from "./Bar.module.css";

export default function Bar() {
    return (
        <div class={style.bar}>
            This is a RED Bar component, imported by both Foo and the index page.
        </div>
    );
}
