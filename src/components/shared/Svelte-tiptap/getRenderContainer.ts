import type { Editor } from "@tiptap/core";

export const getRenderContainer = (editor: Editor, nodeType: string) => {
    const { view } = editor;
    const from = editor.state.selection.from;
    const elements = document.querySelectorAll(".has-focus");
    const elementCount = elements.length;
    const innermostNode = elements[elementCount - 1];
    const element = innermostNode;

    if (
        (element && element.getAttribute("data-type") && element.getAttribute("data-type") === nodeType) ||
        (element && element.classList && element.classList.contains(nodeType))
    ) {
        return element;
    }

    const node = view.domAtPos(from).node as HTMLElement;
    let container: HTMLElement | null = node;

    if (!container.tagName) {
        container = node.parentElement;
    }

    while (container && !(container.getAttribute("data-type") && container.getAttribute("data-type") === nodeType) && !container.classList.contains(nodeType)) {
        container = container.parentElement;
    }

    return container;
};

export default getRenderContainer;
