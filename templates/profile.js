const checkEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Personal Information
const personalInformation = document.querySelector('[personal-information]');
const caUserName = document.querySelector('#ca__username');
const caPhoneNo = document.querySelector('#ca__phone-no');
const caEmail = document.querySelector('#ca__email');

personalInformation.addEventListener('submit', (e) => {
  checkInputs();
  e.preventDefault();

  function checkInputs() {
    const caUsernameValue = caUserName.value.trim();
    const caPhoneNoValue = caPhoneNo.value.trim();
    const caEmailValue = caEmail.value.trim();

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
  }
});

// Security
const securityForm = document.querySelector('[security-form]');
const caOldPassword = document.querySelector('#ca-old__password');
const caPassword = document.querySelector('#ca__password');
const caPasswordConfirm = document.querySelector('#ca__password-confirm');

securityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();

  function checkInputs() {
    const caOldPasswordValue = caOldPassword.value.trim();
    const caPasswordValue = caPassword.value.trim();
    const caPasswordConfirmValue = caPasswordConfirm.value.trim();

    if (caOldPasswordValue.length < 8) {
      setErrorFor(
        caOldPassword,
        'Please enter your old password'
      );
      e.preventDefault();
    } else {
      setSuccessFor(caOldPassword);
    }

    if (caPasswordValue.length < 8) {
      setErrorFor(
        caPassword,
        'Please create a new password containing at least 8 characters'
      );
      e.preventDefault();
    } else if (caPasswordValue === caOldPasswordValue) {
      setErrorFor(caPassword, 'Please create a new password');
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
  }
});

// Shipping Address
const shippingAddressForm = document.querySelector('[shipping-address]');
const shippingAddress = document.querySelector('#shipping-address');
const district = document.querySelector('#district');
const city = document.querySelector('#city');
const postalCode = document.querySelector('#postal-code');

shippingAddressForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();

  function checkInputs() {
    const shippingAddressValue = shippingAddress.value.trim();
    const districtValue = district.value.trim();
    const cityValue = city.value.trim();
    const postalCodeValue = postalCode.value.trim();

    if (shippingAddressValue === '') {
      setErrorFor(shippingAddress, 'Please enter your full address');
      e.preventDefault();
    } else {
      setSuccessFor(shippingAddress);
    }

    if (districtValue === '') {
      setErrorFor(district, 'Please enter your district');
      e.preventDefault();
    } else {
      setSuccessFor(district);
    }

    if (cityValue === '') {
      setErrorFor(city, 'Please enter your city');
      e.preventDefault();
    } else {
      setSuccessFor(city);
    }

    if (!/^[0-9]+$/.test(postalCodeValue) || postalCodeValue.length !== 4) {
      setErrorFor(postalCode, 'Please enter your postal code');
      e.preventDefault();
    } else {
      setSuccessFor(postalCode);
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
