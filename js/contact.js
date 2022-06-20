const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (firstName.value == "" || firstName.value == null) {
    messages.push("First name is required");
    e.preventDefault();
  }
  if (lastName.value == "" || lastName.value == null) {
    messages.push("Last name is required");
    e.preventDefault();
  }

  if (
    email.value == "" ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1
  ) {
    messages.push("correct email  is required");
    email.focus();
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(", ");
    e.preventDefault();
  }
});
