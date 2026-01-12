export const TAG = {
    DIV: "div",
}

export function createElement(tag, className, parentElement) {
    const element = document.createElement(tag);
    element.className = className;
    parentElement.appendChild(element);

    return element;
}
