export const TAGS = {
    DIV: "div",
    P: "p",
}

export function createElement(tag, className, parentElement) {
    const element = document.createElement(tag);
    element.className = className;
    parentElement.appendChild(element);

    return element;
}

export function createTextElement(tag, className, textContent, parentElement) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = textContent;
    parentElement.appendChild(element);

    return element;
}
