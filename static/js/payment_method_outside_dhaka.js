// successful overlay message section
const successfulMessage = document.querySelector('[successful-message]');
const successfulCard = document.querySelector('.card-successful');

// card selector
const card2 = document.querySelector('[card-2]');

card2.addEventListener('click', () => {
  card2.classList.add('selected');
});

//
const paymentMethodForm = document.querySelector('[payment-method-form]');
const checkbox = document.querySelector('[checkbox]');
const terms = document.querySelector('[terms]');
const paymentCardWrapper = document.querySelector('.payment-card__wrapper');

paymentMethodForm.addEventListener('submit', (e) => {
  if (
    !card2.classList.contains('selected')
  ) {
    setErrorFor(card2, 'Please select a payment option');
    e.preventDefault();
  } else if (
    card2.classList.contains('selected')
  ) {
    setSuccessFor(card2);
  }

  if (!checkbox.checked) {
    setErrorFor(
      terms,
      'You must agree to our Privacy Policy, Exchange & Return and Terms & Conditions'
    );
    e.preventDefault();
  } else {
    setSuccessFor(terms);
  }

if (card2.classList.contains('selected') && checkbox.checked) {
    paymentCardWrapper.classList.add('active');
    e.preventDefault();
  }
});

function setErrorFor(input, message) {
  const inputWrapper = input.parentElement;
  const errorContainer = inputWrapper.children[1];
  const errorMessage = errorContainer.children[1];

  errorContainer.classList.add('active');
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const inputWrapper = input.parentElement;
  const errorContainer = inputWrapper.children[1];

  errorContainer.classList.remove('active');
}

// Payment Card
const cardPaymentBtn = document.querySelector('[card-payment-btn]');
const mobilePaymentBtn = document.querySelector('[mobile-payment-btn]');
const cardPaymentForm = document.querySelector('[card-payment-form]');
const mobileBankingOptions = document.querySelector('[mobile-banking-options]');
const cancelBtn = document.querySelector('[cancel-btn]');
const paymentCardOverlay = document.querySelector('[payment-card-overlay]');

cancelBtn.addEventListener('click', () => {
  paymentCardWrapper.classList.remove('active');
});

paymentCardOverlay.addEventListener('click', () => {
  paymentCardWrapper.classList.remove('active');
});

cardPaymentBtn.addEventListener('click', () => {
  cardPaymentBtn.classList.add('active');
  mobilePaymentBtn.classList.remove('active');
  mobileBankingOptions.classList.remove('active');
  cardPaymentForm.classList.add('active');
});

mobilePaymentBtn.addEventListener('click', () => {
  cardPaymentBtn.classList.remove('active');
  mobilePaymentBtn.classList.add('active');
  mobileBankingOptions.classList.add('active');
  cardPaymentForm.classList.remove('active');

  paymentForm.addEventListener('submit', (e) => {
    const bkashSelection = bkash.classList.contains('active');
    const nagadSelection = nagad.classList.contains('active');
    const rocketSelection = rocket.classList.contains('active');
    const upaySelection = upay.classList.contains('active');
    const mfsErrorMessage = document.querySelector('[mfs-error-message]');

    if (
      !bkashSelection &&
      !nagadSelection &&
      !rocketSelection &&
      !upaySelection
    ) {
      mfsErrorMessage.classList.add('active');
      e.preventDefault();
    } else {
      mfsErrorMessage.classList.remove('active');
    }
  });
});

// MFS Button
const bkash = document.querySelector('[bkash]');
const nagad = document.querySelector('[nagad]');
const rocket = document.querySelector('[rocket]');
const upay = document.querySelector('[upay]');

bkash.addEventListener('click', () => {
  bkash.classList.add('active');
  nagad.classList.remove('active');
  rocket.classList.remove('active');
  upay.classList.remove('active');
});

nagad.addEventListener('click', () => {
  bkash.classList.remove('active');
  nagad.classList.add('active');
  rocket.classList.remove('active');
  upay.classList.remove('active');
});

rocket.addEventListener('click', () => {
  bkash.classList.remove('active');
  nagad.classList.remove('active');
  rocket.classList.add('active');
  upay.classList.remove('active');
});

upay.addEventListener('click', () => {
  bkash.classList.remove('active');
  nagad.classList.remove('active');
  rocket.classList.remove('active');
  upay.classList.add('active');
});

const paymentForm = document.querySelector('[payment-form]');
const cardNumber = document.querySelector('#card-number');
const monthYear = document.querySelector('#month-year');
const cvcCvv = document.querySelector('#cvc-cvv');
const cardHolder = document.querySelector('#card-holder');
const saveCardCheckbox = document.querySelector('[save-card-checkbox]');
const successfulCardHeader = document.querySelector('[successful-card-header]');

const checkboxTerms = saveCardCheckbox.parentElement;
const inputWrapper = checkboxTerms.parentElement;
const errorMessage = inputWrapper.children[1];
const errorText = errorMessage.children[1];

paymentForm.addEventListener('submit', (e) => {
  checkInputs();

  function checkInputs() {
    const cardNumberValue = cardNumber.value.trim();
    const monthYearValue = monthYear.value.trim();
    const cvcCvvValue = cvcCvv.value.trim();
    const cardHolderValue = cardHolder.value.trim();

    const cardNumberValidation =
      !/^[0-9]+$/.test(cardNumberValue) || cardNumberValue.length !== 16;
    const monthYearValidation = monthYearValue === '';
    const cvcValidation =
      !/^[0-9]+$/.test(cvcCvvValue) || cvcCvvValue.length !== 3;
    const cardHolderValidation =
      cardHolderValue === '' || cardHolderValue.length > 30;
    const cardTermValidation = !saveCardCheckbox.checked;

    if (!/^[0-9]+$/.test(cardNumberValue) || cardNumberValue.length !== 16) {
      setErrorFor(cardNumber, 'Please enter a valid card number');
      e.preventDefault();
    } else {
      setSuccessFor(cardNumber);
    }

    if (monthYearValue === '') {
      setErrorFor(monthYear, 'Please enter month & Year');
      e.preventDefault();
    } else {
      setSuccessFor(monthYear);
    }

    if (!/^[0-9]+$/.test(cvcCvvValue) || cvcCvvValue.length !== 3) {
      setErrorFor(cvcCvv, 'Please enter CVC/CVV number');
      e.preventDefault();
    } else {
      setSuccessFor(cvcCvv);
    }

    if (cardHolderValue === '' || cardHolderValue.length > 30) {
      setErrorFor(cardHolder, 'Please enter card holder name');
      e.preventDefault();
    } else {
      setSuccessFor(cardHolder);
    }

    if (!saveCardCheckbox.checked) {
      errorMessage.classList.add('active');
      errorText.innerText = 'You must accept this';
      e.preventDefault();
    } else {
      errorMessage.classList.remove('active');
    }

    if (
      !cardNumberValidation &&
      !monthYearValidation &&
      !cvcValidation &&
      !cardHolderValidation &&
      !cardTermValidation
    ) {
      successfulMessage.classList.add('active');
      paymentCardWrapper.classList.remove('active');
      successfulCardHeader.innerText = 'Your Payment is complete!';
      e.preventDefault();
    }
  }

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
});