const insideDhakaSD = document.querySelector(
  '[inside-dhaka__standard-delivery]'
);
const insideDhakaUD = document.querySelector('[inside-dhaka__urgent-delivery]');

const outsideDhakaSAParibahan = document.querySelector('[od__sa-paribahan]');

const outsideDhakaSC = document.querySelector('[od__sc]');
const outsideDhakaUSB = document.querySelector('[od__usb-express]');

const shippingDetailsForm = document.querySelector('#shipping-details__form');
const insideDhaka = document.querySelector('[inside-dhaka]');
const outsideDhaka = document.querySelector('[outside-dhaka]');
const shippingLocationID = document.querySelector(
  '[shipping-location-inside-dhaka]'
);
const shippingLocationOD = document.querySelector(
  '[shipping-location-outside-dhaka]'
);

// inside dhaka card selector
insideDhakaSD.addEventListener('click', () => {
  insideDhakaSD.classList.add('selected');
  insideDhakaUD.classList.remove('selected');
});
insideDhakaUD.addEventListener('click', () => {
  insideDhakaUD.classList.add('selected');
  insideDhakaSD.classList.remove('selected');
});

// Outside dhaka card selector
outsideDhakaSAParibahan.addEventListener('click', () => {
  outsideDhakaSAParibahan.classList.add('selected');
  outsideDhakaSC.classList.remove('selected');
  outsideDhakaUSB.classList.remove('selected');
});

outsideDhakaSC.addEventListener('click', () => {
  outsideDhakaSC.classList.add('selected');
  outsideDhakaSAParibahan.classList.remove('selected');
  outsideDhakaUSB.classList.remove('selected');
});

outsideDhakaUSB.addEventListener('click', () => {
  outsideDhakaUSB.classList.add('selected');
  outsideDhakaSAParibahan.classList.remove('selected');
  outsideDhakaSC.classList.remove('selected');
});

const userName = document.querySelector('#username');
const phoneNo = document.querySelector('#phone-no');
const shippingAddress = document.querySelector('#shipping-address');
const city = document.querySelector('#city');
const postalCode = document.querySelector('#postal-code');
const shippingLocation = document.querySelector('.input__options');
const districtInputSAP = document.querySelector('[district-input-sap]');
const districtInputSC = document.querySelector('[district-input-sc]');
const districtInputUSB = document.querySelector('[district-input-usb]');
const branchInputSAP = document.querySelector('[branch-input-sap]');
const branchInputSC = document.querySelector('[branch-input-sc]');
const branchInputUSB = document.querySelector('[branch-input-usb]');

shippingDetailsForm.addEventListener('submit', (e) => {
  checkInputs();

  function checkInputs() {
    const userNameValue = userName.value.trim();
    const phoneNoValue = phoneNo.value.trim();
    const shippingAddressValue = shippingAddress.value.trim();
    const cityValue = city.value.trim();
    const postalCodeValue = postalCode.value.trim();
    const inputOption = document.querySelector('.input--option-placeholder');
    const inputWrapper = shippingLocation.parentElement;
    const errorMessage = inputWrapper.children[1];
    const errorText = errorMessage.children[1];
    const inputOptionBorder = inputWrapper.children[0];
    const deliveryLocation = document.querySelector('[delivery-location]');
    const deliveryCost = document.querySelector('[delivery-cost]');

    // Shipping Location
    if (shippingLocation.value === inputOption.value) {
      errorMessage.classList.add('active');
      inputOptionBorder.classList.add('error');
      inputOptionBorder.classList.remove('success');
      errorText.innerText = 'Please select your shipping location';
      e.preventDefault();
    } else if (shippingLocation.value === insideDhaka.value) {
      shippingLocationID.classList.add('active');
      shippingLocationOD.classList.remove('active');
      errorMessage.classList.remove('active');
      inputOptionBorder.classList.remove('error');
      inputOptionBorder.classList.add('success');
      deliveryLocation.innerText = 'Delivery - Inside Dhaka \n (approximate)';
      deliveryCost.innerText = 'BDT 60';

      outsideDhakaUSB.classList.remove('selected');
      outsideDhakaSAParibahan.classList.remove('selected');
      outsideDhakaSC.classList.remove('selected');
      shippingDetailsForm.action = 'payment_method_inside_dhaka.html';
    } else if (shippingLocation.value === outsideDhaka.value) {
      shippingLocationOD.classList.add('active');
      shippingLocationID.classList.remove('active');
      errorMessage.classList.remove('active');
      inputOptionBorder.classList.remove('error');
      inputOptionBorder.classList.add('success');
      deliveryLocation.innerText = 'Delivery - Outside Dhaka \n (approximate)';
      deliveryCost.innerText = 'BDT 120';

      insideDhakaSD.classList.remove('selected');
      insideDhakaUD.classList.remove('selected');
      shippingDetailsForm.action = 'payment_method_outside_dhaka.html';
    } else return;

    // inside Dhaka
    insideDhakaSD.addEventListener('click', () => {
      deliveryLocation.innerText =
        'Delivery - Inside Dhaka \n (Standard Delivery)';
      deliveryCost.innerText = 'BDT 60';
    });

    insideDhakaUD.addEventListener('click', () => {
      deliveryLocation.innerText =
        'Delivery - Inside Dhaka \n (Urgent Delivery)';
      deliveryCost.innerText = 'BDT 120';
    });

    // outside Dhaka
    outsideDhakaSAParibahan.addEventListener('click', () => {
      deliveryLocation.innerText = 'Delivery - Outside Dhaka \n (SA Paribahan)';
      deliveryCost.innerText = 'BDT 120';

      shippingDetailsForm.addEventListener('submit', (e) => {
        if (districtInputSAP.value === '') {
          setErrorFor(districtInputSAP, 'Please enter your District');
          e.preventDefault();
        } else {
          setSuccessFor(districtInputSAP);
        }

        if (branchInputSAP.value === '') {
          setErrorFor(branchInputSAP, 'Please enter a nearby Branch Location');
          e.preventDefault();
        } else {
          setSuccessFor(branchInputSAP);
        }
      });
      districtInputSC.value = '';
      branchInputSC.value = '';
      districtInputUSB.value = '';
      branchInputUSB.value = '';
    });

    outsideDhakaSC.addEventListener('click', () => {
      deliveryLocation.innerText =
        'Delivery - Outside Dhaka \n (Sundarban Courier)';
      deliveryCost.innerText = 'BDT 120';

      shippingDetailsForm.addEventListener('submit', (e) => {
        if (districtInputSC.value === '') {
          setErrorFor(districtInputSC, 'Please enter your District');
          e.preventDefault();
        } else {
          setSuccessFor(districtInputSC);
        }

        if (branchInputSC.value === '') {
          setErrorFor(branchInputSC, 'Please enter a nearby Branch Location');
          e.preventDefault();
        } else {
          setSuccessFor(branchInputSC);
        }
      });

      districtInputSAP.value = '';
      branchInputSAP.value = '';
      districtInputUSB.value = '';
      branchInputUSB.value = '';
    });

    outsideDhakaUSB.addEventListener('click', () => {
      deliveryLocation.innerText = 'Delivery - Outside Dhaka \n (USB Courier)';
      deliveryCost.innerText = 'BDT 120';

      shippingDetailsForm.addEventListener('submit', (e) => {
        if (districtInputUSB.value === '') {
          setErrorFor(districtInputUSB, 'Please enter your District');
          e.preventDefault();
        } else {
          setSuccessFor(districtInputUSB);
        }

        if (branchInputUSB.value === '') {
          setErrorFor(branchInputUSB, 'Please enter a nearby Branch Location');
          e.preventDefault();
        } else {
          setSuccessFor(branchInputUSB);
        }
      });

      districtInputSAP.value = '';
      branchInputSAP.value = '';
      districtInputSC.value = '';
      branchInputSC.value = '';
    });

    const sap = districtInputSAP.value === '' || branchInputSAP.value === '';
    const sc = districtInputSC.value === '' || branchInputSC.value === '';
    const usb = districtInputUSB.value === '' || branchInputUSB.value === '';

    const insideD =
      !insideDhakaSD.classList.contains('selected') &&
      !insideDhakaUD.classList.contains('selected');
    const outsideD = sap && sc && usb;

    if (insideD && outsideD) {
      e.preventDefault();
    }

    if (userNameValue === '' || userNameValue.length > 30) {
      setErrorFor(userName, 'Please enter you name');
      e.preventDefault();
    } else {
      setSuccessFor(userName);
    }

    if (!/^[0-9]+$/.test(phoneNoValue) || phoneNoValue.length !== 11) {
      setErrorFor(phoneNo, 'Please enter a valid phone no.');
      e.preventDefault();
    } else {
      setSuccessFor(phoneNo);
    }

    if (shippingAddressValue === '') {
      setErrorFor(shippingAddress, 'Please enter a your address');
      e.preventDefault();
    } else {
      setSuccessFor(shippingAddress);
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
