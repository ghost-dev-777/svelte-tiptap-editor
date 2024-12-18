import { mount } from "svelte";
import "./styles/tiptap.css";

import App from "./App.svelte";

let editorInstance;

const editorElement = document.getElementById("sv-edit");
if (editorElement) {
    editorInstance = mount(App, { target: editorElement, props: { name: "world1" } });
}

export { editorInstance };
