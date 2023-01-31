const heading = document.querySelector("h1");
const title = heading.innerText.split("");
heading.innerText = "";
for (let i = 0; i < title.length; i++) {
  heading.innerHTML += `<span data-id="${[i]}">${title[i]}</span>`;
}

const subHeading = document.querySelector(".intro-span-text");
const statement = subHeading.innerText.split(" ");
subHeading.innerText = "";
for (let j = 0; j < statement.length; j++) {
  subHeading.innerHTML += `<span data-num="${[j]}">${statement[j]}</span>`;
}
