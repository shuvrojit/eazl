const stepOne = document.querySelector('[step-one]');
const stepTwo = document.querySelector('[step-two]');
const stepThree = document.querySelector('[step-three]');
const arEmailPhone = document.querySelector('#ar__email');
const arOtp = document.querySelector('#ar__otp');
const arPasswordNew = document.querySelector('#ar__password-new');
const arPasswordConfirm = document.querySelector('#ar__password-confirm');

const checkEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

stepOne.addEventListener('submit', (e) => {
  checkInputs();
  e.preventDefault();

  function checkInputs() {
    const arEmailPhoneValue = arEmailPhone.value.trim();

    if (
      !arEmailPhoneValue.match(checkEmail) &&
      arEmailPhoneValue.length !== 11
    ) {
      setErrorFor(arEmailPhone, 'Please enter your phone no. or email address');
      e.preventDefault();
    } else {
      setSuccessFor(arEmailPhone);
      stepOne.classList.remove('active');
      stepTwo.classList.add('active');
    }
  }
});

stepTwo.addEventListener('submit', (e) => {
  checkInputs();
  e.preventDefault();

  function checkInputs() {
    const arOtpValue = arOtp.value.trim();

    if (!/^[0-9]+$/.test(arOtpValue) || arOtpValue.length !== 4) {
      setErrorFor(arOtp, 'Please enter your OTP');
      e.preventDefault();
    } else {
      setSuccessFor(arOtp);
      stepTwo.classList.remove('active');
      stepThree.classList.add('active');
    }
  }
});

stepThree.addEventListener('submit', (e) => {
  checkInputs();

  function checkInputs() {
    const arPasswordNewValue = arPasswordNew.value.trim();
    const arPasswordConfirmValue = arPasswordConfirm.value.trim();

    if (arPasswordNewValue.length < 8) {
      setErrorFor(arPasswordNew, 'Password must be at least 8 characters');
      e.preventDefault();
    } else {
      setSuccessFor(arPasswordNew);
    }

    if (arPasswordConfirmValue !== arPasswordNewValue) {
      setErrorFor(arPasswordConfirm, "Password don't match");
      e.preventDefault();
    } else {
      setSuccessFor(arPasswordConfirm);
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
