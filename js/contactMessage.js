const form = document.querySelector("form");
const messageContainer = document.querySelector(".message-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  messageContainer.classList.add("message");
});
