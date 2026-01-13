export const TAGS = {
  div: "div",
  p: "p",
  section: "section",
  article: "article",
  h2: "h2",
  span: "span",
  button: "button",
};

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

export function createImageElement(className, src, alt, parentElement) {
  const element = document.createElement("img");
  element.className = className;
  element.src = src;
  element.alt = alt;
  parentElement.appendChild(element);

  return element;
}

export function removeElement(querySelector) {
  const element = document.querySelector(querySelector);
  element.remove();
}
