const contactForm = document.querySelector('[contact-form]');
const caUserName = document.querySelector('#ca__username');
const caEmail = document.querySelector('#ca__email');
const caPhoneNo = document.querySelector('#ca__phone-no');
const messageInput = document.querySelector('[message-input]');

const checkEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

contactForm.addEventListener('submit', (e) => {
  checkInputs();

  function checkInputs() {
    const caUsernameValue = caUserName.value.trim();
    const caEmailValue = caEmail.value.trim();
    const caPhoneNoValue = caPhoneNo.value.trim();
    const messageInputValue = messageInput.value.trim();

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

    if (
      (!/^[0-9]+$/.test(caEmailValue) || caEmailValue.length !== 11) &&
      !caEmailValue.match(checkEmail)
    ) {
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

    if (messageInputValue === '') {
      setErrorFor(messageInput, 'Let us know your thoughts');
      e.preventDefault();
    } else {
      setSuccessFor(messageInput);
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
