export function reloadPage() {
  window.location.reload();
}

export function validateRequiredFields(form) {
  const inputs = form.querySelectorAll("input[required]");

  inputs.forEach((input) => {
    const value = input.value.trim();

    if (value === null || value === undefined || value === "") {
      const inputName = translateFieldNames(input.name);

      showFieldError(input, `Campo ${inputName} é obrigatório.`);
    }
  });
}

export function showFieldError(input, message, timeout = 5000) {
  const span = document.createElement("span");
  span.className = "body-sm color-error-field";
  span.textContent = message;

  input.insertAdjacentElement("afterend", span);

  setTimeout(() => span.remove(), timeout);
}

export function translateFieldNames(inputName) {
  let newInputName;

  switch (inputName) {
    case "title":
      newInputName = "título";
      break;
    case "author":
      newInputName = "autor";
      break;
    default:
      newInputName = inputName;
  }

  return newInputName;
}

export function getBadge(status) {
  let badge;

  switch (status) {
    case "lido":
      badge = "done";
      break;
    case "lendo":
      badge = "in-progress";
      break;
    default:
      badge = "default";
  }

  return badge;
}
