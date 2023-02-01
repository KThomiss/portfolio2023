const copyEmail = document.querySelector(".email-copy");
const email = copyEmail.dataset.email;

const copyEmailAddress = async () => {
  try {
    await navigator.clipboard.writeText(email);
  } catch (error) {
    console.log("failed to copy");
  }
};

copyEmail.addEventListener("click", copyEmailAddress);
