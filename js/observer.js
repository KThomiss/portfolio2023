const projectName = document.querySelectorAll(".project-text-container");

const observeProjectName = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.9,
  }
);

projectName.forEach((names) => {
  observeProjectName.observe(names);
});

const projectBtn = document.querySelectorAll(".btn-view-modal");

const observeProjectsBtn = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.9,
  }
);

projectBtn.forEach((button) => {
  observeProjectsBtn.observe(button);
});

const experienceSection = document.querySelectorAll(".experience-container > div");

const observeExperienceSection = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        entry.target.style.animationDelay = `${index * 0.14}s`;
      }
    });
  },
  {
    threshold: 1,
  }
);

experienceSection.forEach((inView) => {
  observeExperienceSection.observe(inView);
});

const trainingSection = document.querySelectorAll(".training-container > div");

const observeTrainingSection = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        entry.target.style.animationDelay = `${index * 0.14}s`;
      }
    });
  },
  {
    threshold: 1,
  }
);

trainingSection.forEach((inView) => {
  observeTrainingSection.observe(inView);
});
