const heading = document.querySelector("h1");
const text = heading.innerText.split("");
heading.innerText = "";

for (let i = 0; i < text.length; i++) {
  heading.innerHTML += `<span data-id="${[i]}">${text[i]}</span>`;
}

/* const spanLetters = document.querySelectorAll("h1 span");

const observeHeadingText = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      console.log(entry.isIntersecting);
      if (entry.isIntersecting === true) {
        heading.classList.add("animate");
        entry.target.style.animationDelay = `${index * 0.14}s`;
      }
      if (entry.isIntersecting === false) {
         heading.classList.remove("animate");
      }
    });
  },
  {
    threshold: 1,
  }
);

spanLetters.forEach((letter) => {
  observeHeadingText.observe(letter);
}); */
