// Toggle Background Color
const toggleButton = document.getElementById("toggle-button");
let isBackgroundToggled = false;

toggleButton.addEventListener("click", () => {
  document.body.style.backgroundColor = isBackgroundToggled
    ? "white"
    : "lightblue";
  isBackgroundToggled = !isBackgroundToggled;
});

// Slider for Text Size
const textSizeSlider = document.getElementById("text-size-slider");
const resizableText = document.getElementById("resizable-text");

textSizeSlider.addEventListener("input", () => {
  resizableText.style.fontSize = `${textSizeSlider.value}px`;
});

// Modal
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal-button");
const closeModalButton = document.getElementById("close-modal-button");

openModalButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Form Validation
const form = document.getElementById("validation-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (event) => {
  let isValid = true;

  // Name Validation
  if (nameInput.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    passwordError.textContent =
      "Password must be at least 8 characters long, with one uppercase letter and one number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});

// Bonus: Dropdown Menu
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdown-message");

dropdown.addEventListener("change", () => {
  const selectedOption = dropdown.value;
  dropdownMessage.textContent = `You selected: ${selectedOption}`;
});
