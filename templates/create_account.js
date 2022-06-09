const caAccountForm = document.querySelector('#create-account__form');
const caUserName = document.querySelector('#ca__username');
const caPhoneNo = document.querySelector('#ca__phone-no');
const caEmail = document.querySelector('#ca__email');
const caPassword = document.querySelector('#ca__password');
const caPasswordConfirm = document.querySelector('#ca__password-confirm');
const caTermsService = document.querySelector('#terms-service');
const caSubmitBtn = document.querySelector('#create-account__submit-btn');

caAccountForm.addEventListener('submit', (e) => {
  checkInputs();

  function checkInputs() {
    const caUsernameValue = caUserName.value.trim();
    const caPhoneNoValue = caPhoneNo.value.trim();
    const caEmailValue = caEmail.value.trim();
    const caPasswordValue = caPassword.value.trim();
    const caPasswordConfirmValue = caPasswordConfirm.value.trim();
    const terms = document.querySelector('#terms-error-message');

    if (caUsernameValue === '' || caUsernameValue.length > 30) {
      setErrorFor(caUserName, 'Please enter you name');
      e.preventDefault();
    } else {
      setSuccessFor(caUserName);
    }

    
    if (!/^[0-9]+$/.test(caPhoneNoValue) || caPhoneNoValue.length !== 11) {
      setErrorFor(caPhoneNo, 'Please enter a valid phone no.');
      e.preventDefault();
    } else {
      setSuccessFor(caPhoneNo);
    }

    if (caEmailValue.length < 14 || caEmailValue.length > 30) {
      setErrorFor(caEmail, 'Please enter a valid email or you can leave it');

      const inputWrapper = caEmail.parentElement;
      const errorSign = inputWrapper.children[2];
      const errorMessage = inputWrapper.children[3];
      const inputContainer = inputWrapper.children[0];

      errorSign.style.color = '#ff8b00';
      errorMessage.style.color = '#ff8b00';
      inputContainer.style.border = '1px solid #ff8b00';

    } else {
      setSuccessFor(caEmail);
      const inputWrapper = caEmail.parentElement;
      const inputContainer = inputWrapper.children[0];
      inputContainer.style.border = '1px solid #00875a';
    }

    if (caPasswordValue.length < 8) {
      setErrorFor(
        caPassword,
        'Please create a password containing at least 8 characters'
      );
      e.preventDefault();
    } else {
      setSuccessFor(caPassword);
    }

    if (caPasswordConfirmValue !== caPasswordValue) {
      setErrorFor(caPasswordConfirm, "Password don't match");
      e.preventDefault();
    } else if (caPasswordConfirmValue === '') {
      setErrorFor(caPasswordConfirm, "password don't match");
      e.preventDefault();
    } else {
      setSuccessFor(caPasswordConfirm);
    }

    if (!caTermsService.checked) {
      terms.classList.add('active');
      terms.children[1].innerText =
        'You must agree to our terms of service and privacy policy';
      e.preventDefault();
    } else {
      terms.classList.remove('active');
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