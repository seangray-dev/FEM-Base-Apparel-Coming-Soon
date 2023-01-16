const form = document.querySelector("form");
const emailInput = document.querySelector('input[name="email"]');
const errorImg = document.querySelector(".error-img");
const errorText = document.querySelector(".text-error");
const submitBtn = document.querySelector("#btn-submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;

  if (!email) {
    // if email is empty
    errorImg.classList.remove("hidden");
    errorText.classList.remove("hidden");
    emailInput.classList.add("border-desaturatedRed");
    submitBtn.setAttribute("disabled", true);
  } else if (!validateEmail(email)) {
    // if email is not valid
    errorImg.classList.remove("hidden");
    errorText.classList.remove("hidden");
    emailInput.classList.add("border-desaturatedRed");
    submitBtn.setAttribute("disabled", true);
  } else {
    // if email is valid
    errorImg.classList.add("hidden");
    errorText.classList.add("hidden");
    emailInput.classList.remove("border-desaturatedRed");
    submitBtn.removeAttribute("disabled");
    // submit the form
    form.submit();
  }
});

// Email validation function
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
