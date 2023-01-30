const heading = document.querySelector("h1");
const text = heading.innerText.split("");
heading.innerText = "";

for (let i = 0; i < text.length; i++) {
  heading.innerHTML += `<span data-id="${[i]}">${text[i]}</span>`;
}
