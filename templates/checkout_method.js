const loginForm = document.querySelector('#login__form');
const loginEmail = document.querySelector('#login__email');
const loginPassword = document.querySelector('#login__password');

const checkEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

loginForm.addEventListener('submit', (e) => {
  checkInputs();

  function checkInputs() {
    const loginEmailValue = loginEmail.value.trim();
    const loginPasswordValue = loginPassword.value.trim();

    if ((!/^[0-9]+$/.test(loginEmailValue) || loginEmailValue.length !== 11) && !loginEmailValue.match(checkEmail)) {
      setErrorFor(loginEmail, 'Please enter a valid email or phone no.');
      e.preventDefault();
    } else {
      setSuccessFor(loginEmail);
    }

    if (loginPasswordValue.length < 8) {
      setErrorFor(loginPassword, 'Please enter correct password');
      e.preventDefault();
    } else {
      setSuccessFor(loginPassword);
    }
  }
});

function setErrorFor(input, message) {
  const inputWrapper = input.parentElement;
  const errorSign = inputWrapper.children[2];
  const errorMessage = inputWrapper.children[3];
  const successSign = inputWrapper.children[1];
  const inputContainer = inputWrapper.children[0];

  errorSign.classList.add('active');
  errorMessage.classList.add('active');
  errorMessage.innerText = message;
  successSign.classList.remove('active');
  inputContainer.classList.add('error');
  inputContainer.classList.remove('success');
}

function setSuccessFor(input) {
  const inputWrapper = input.parentElement;
  const successSign = inputWrapper.children[1];
  const errorSign = inputWrapper.children[2];
  const errorMessage = inputWrapper.children[3];
  const inputContainer = inputWrapper.children[0];

  successSign.classList.add('active');
  inputWrapper.classList.add('success');
  inputWrapper.classList.remove('error');
  errorSign.classList.remove('active');
  errorMessage.classList.remove('active');
  inputContainer.classList.add('success');
  inputContainer.classList.remove('error');
}
