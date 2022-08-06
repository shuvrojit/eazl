// in-cm btn
const inBtn = document.querySelector('.btn__in');
const cmBtn = document.querySelector('.btn__cm');

inBtn.addEventListener('click', () => {
  const activeBtn = inBtn.classList.contains('active');

  if (!activeBtn) {
    inBtn.classList.add('active');
    cmBtn.classList.remove('active');
  }
});

cmBtn.addEventListener('click', () => {
  const activeBtn = cmBtn.classList.contains('active');

  if (!activeBtn) {
    cmBtn.classList.add('active');
    inBtn.classList.remove('active');
  }
});

// Size card modal
const sizeCardLink = document.querySelector('#size-card__link');
const sizeCard = document.querySelector('.size-card');
const sizeCardOverlay = document.querySelector('.size-card--overlay');
const sizeCancelButton = document.querySelector('.icon__cancel-wrapper');

sizeCardLink.addEventListener('click', () => {
  sizeCard.classList.add('active');
  sizeCardOverlay.classList.add('active');
});

sizeCancelButton.addEventListener('click', () => {
  removeModal();
});

sizeCardOverlay.addEventListener('click', () => {
  removeModal();
});

function removeModal() {
  sizeCard.classList.remove('active');
  sizeCardOverlay.classList.remove('active');
}

// Product Thumbnail
const productFeatured = document.querySelector('.product__featured');
const productThumbnails = document.querySelectorAll('.product__thumbnail');
const activeThumbnail = document.querySelectorAll('.active-thumbnail');
const slider = document.querySelectorAll('.slider');

productThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', function () {
    this.classList.add('active-thumbnail');
    productFeatured.src = thumbnail.src;
  });
});

// image modal
const featuredModalWrapper = document.querySelector('.featured-modal__wrapper');
const productFeaturedModal = document.querySelector('.product__featured-modal');
const productFeaturedModalOverlay = document.querySelector(
  '.product__featured-modal-overlay'
);
const cancelIconFeaturedModal = document.querySelector(
  '.cancel-icon__featured-modal'
);

productFeatured.addEventListener('click', () => {
  productFeaturedModal.src = productFeatured.src;
  modalActive();
});

productFeaturedModalOverlay.addEventListener('click', () => {
  modalDeactivate();
});

cancelIconFeaturedModal.addEventListener('click', () => {
  modalDeactivate();
});

function modalActive() {
  featuredModalWrapper.classList.add('active');
}
function modalDeactivate() {
  featuredModalWrapper.classList.remove('active');
}

// size button
const addToBag = document.querySelector('[add-to-bag]');
const sizeBtn = document.querySelectorAll('[size-btn]');
const sizeBtnGroup = document.querySelector('[size-btn-group]');
const errorMessages = document.querySelector('#terms-error-message');
const errorText = document.querySelector('.error-text');

addToBag.addEventListener('submit', (e) => {
 

  if (!sizeBtnGroup.classList.contains('selected')) {
    errorMessages.classList.add('active');
    errorText.innerText = 'Please select your size';
    e.preventDefault();
  } else {
    errorMessages.classList.remove('active');
  }
});

sizeBtn.forEach((size) => {
  size.addEventListener('click', () => {
    const sizeBtnGroup = size.parentElement;
    sizeBtnGroup.classList.add('selected');
  });
});