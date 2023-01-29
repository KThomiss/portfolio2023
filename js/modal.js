const body = document.querySelector("body");
const showModalBtn = document.querySelectorAll(".btn-view-modal");
const hideModal = document.querySelectorAll(".btn-hide-modal");
const projects = document.querySelectorAll(".project-modal");
const modalBody = document.querySelectorAll(".modal-body");
const projectImg = document.querySelectorAll(".project-img");
let scrollValue = 0;

//close current modal by data set ID
hideModal.forEach((btn) => {
  btn.addEventListener("click", function (curr) {
    closeModal(curr.target.dataset.btn);
  });
});

function closeModal(num) {
  projects.forEach((curr) => {
    if (curr.classList.contains("open")) {
      curr.classList.remove("open");
      body.classList.remove("remove-scroll");
    }
  });
  //reset carousel when exiting the modal
  const transformCarousel = document.querySelector(`.transform-carousel.project${num}`);
  const marginContainer = document.querySelector(`.margin-container.project${num}`);
  marginContainer.style.marginLeft = `0`;
  transformCarousel.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0.0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
  scrollValue = 0;
}

//open modal by data set ID
showModalBtn.forEach((e) => {
  e.addEventListener("click", function (curr) {
    openModal(curr.target.dataset.btn);
  });
});

function openModal(id) {
  projects.forEach((project) => {
    if (id === project.dataset.modal) {
      project.classList.add("open");
      body.classList.add("remove-scroll");
    }
  });
}

//set event on the current opened modal by selecting body data and applying num to the selector in the handlecarousel function
for (let i = 0; i < modalBody.length; i++) {
  modalBody[i].addEventListener("wheel", function (e) {
    let num = this.dataset.body;
    if (window.innerWidth > 950) {
      handleCarousel(num, e);
    }
  });
}

function handleCarousel(num, e) {
  e.preventDefault();
  const transformCarousel = document.querySelector(`.transform-carousel.project${num}`);
  const marginContainer = document.querySelector(`.margin-container.project${num}`);

  let totalWidth = 0;
  const allImages = document.querySelectorAll(`.project-carousel.project${num} img`);

  for (let i = 0; i < allImages.length; i++) {
    totalWidth += parseInt(allImages[i].offsetWidth);
  }

  scrollValue += e.deltaY;

  scrollValue = Math.min(Math.max(0, scrollValue), totalWidth);

  marginContainer.style.marginLeft = `${scrollValue}px`;
  transformCarousel.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0.0, 0, 0, 0, 1, 0, -${scrollValue}, 0, 0, 1)`;
}

//scroll back function/reset carousel
const btnToStart = document.querySelectorAll(".btn-scroll-back");

btnToStart.forEach((btn) => {
  btn.addEventListener("click", function (curr) {
    resetCarousel(curr.target.dataset.btn);
  });
});

function resetCarousel(num) {
  const transformCarousel = document.querySelector(`.transform-carousel.project${num}`);
  const marginContainer = document.querySelector(`.margin-container.project${num}`);
  marginContainer.style.marginLeft = `0`;
  transformCarousel.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0.0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`;
  scrollValue = 0;
}
