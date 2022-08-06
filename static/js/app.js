//Hamburger menu
let menu = document.getElementById('hamburger');
hamburger.onclick = function () {
  hamburger.classList.toggle('openMenu');
};

hamburger;

//Navigation menu
const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('[nav-link]');
  const navLinkCollections = document.querySelector('[nav-link-collections]');
  const navLinkCollectionsWrapper = document.querySelector(
    '[nav-link-collections-wrapper]'
  );
  const backBtn = document.querySelector('[back-btn]');
  const backBtnNewArrival = document.querySelector('[back-btn-newArrival]');

  hamburger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7}s`;
      }
    });

    // Collections
    navLinkCollections.addEventListener('click', () => {
      navLinkCollectionsWrapper.classList.add('nav-active');

      backBtn.addEventListener('click', () => {
        navLinkCollectionsWrapper.classList.remove('nav-active');
      });
    });

    // New Arrivals
    navLinkNewArrivals.addEventListener('click', () => {
      newArrivalsWrapper.classList.add('nav-active');

      backBtnNewArrival.addEventListener('click', () => {
        newArrivalsWrapper.classList.remove('nav-active');
      });
    });
  });
};

navSlide();

// new arrivals (Navbar)
const navLinkNewArrivals = document.querySelector('[nav-link-new-arrivals]');
const newArrivalsWrapper = document.querySelector(
  '[nav-link-newArrival-wrapper]'
);
const navLinkNewArrivalHover = document.querySelector(
  '[nav-link-new-arrivals] a'
);

navLinkNewArrivals.addEventListener('mouseenter', () => {
  newArrivalsWrapper.classList.add('active');
});

newArrivalsWrapper.addEventListener('mouseenter', () => {
  newArrivalsWrapper.classList.add('active');
  navLinkNewArrivalHover.classList.add('active');
});

newArrivalsWrapper.addEventListener('mouseleave', () => {
  newArrivalsWrapper.classList.remove('active');
  navLinkNewArrivalHover.classList.remove('active');
});

navLinkNewArrivals.addEventListener('mouseleave', () => {
  newArrivalsWrapper.classList.remove('active');
});

// collections (Navbar)
const navLinkCollections = document.querySelector('[nav-link-collections]');
const navLinkCollectionsWrapper = document.querySelector(
  '[nav-link-collections-wrapper]'
);
const navLinkCollectionsHover = document.querySelector(
  '[nav-link-collections] a'
);

navLinkCollections.addEventListener('mouseenter', () => {
  navLinkCollectionsWrapper.classList.add('active');
});

navLinkCollectionsWrapper.addEventListener('mouseenter', () => {
  navLinkCollectionsWrapper.classList.add('active');
  navLinkCollectionsHover.classList.add('active');
});

navLinkCollectionsWrapper.addEventListener('mouseleave', () => {
  navLinkCollectionsWrapper.classList.remove('active');
  navLinkCollectionsHover.classList.remove('active');
});

navLinkCollections.addEventListener('mouseleave', () => {
  navLinkCollectionsWrapper.classList.remove('active');
});

// Search Btn (Navbar)
const searchBtn = document.querySelectorAll('[search-btn]');
const btnCancel = document.querySelector('[btn-cancel]');
const searchWrapper = document.querySelector('[search-wrapper]');
const searchInput = document.querySelector('[search-input]');
const searchArrow = document.querySelector('[search-arrow]');
const searchIcon = document.querySelector('[search-icon]');

searchBtn.forEach((search) => {
  search.addEventListener('click', () => {
    searchWrapper.classList.add('trigger');
  });
});

btnCancel.addEventListener('click', () => {
  searchWrapper.classList.remove('trigger');
  searchInput.value = '';

  if (searchInput.value === '') {
    searchIcon.classList.add('active');
    searchArrow.classList.remove('active');
  }
});

searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    searchIcon.classList.add('active');
    searchArrow.classList.remove('active');
  } else {
    searchIcon.classList.remove('active');
    searchArrow.classList.add('active');
  }
});

// Bag Popup (Navbar)
const bagBtn = document.querySelector('[bag-btn]');
const bagWrapper = document.querySelector('[bag-wrapper]');
const bagItem = document.querySelectorAll('.bag__shipping-item');
const bagItems = document.querySelector('[bag-items]');
const emptyBag = document.querySelector('[empty-bag]');

bagBtn.addEventListener('mouseenter', () => {
  bagWrapper.classList.add('active');

  bagBtn.addEventListener('mouseleave', () => {
    bagWrapper.classList.remove('active');
  });

  bagWrapper.addEventListener('mouseenter', () => {
    bagWrapper.classList.add('active');
  });
  bagWrapper.addEventListener('mouseleave', () => {
    bagWrapper.classList.remove('active');
  });

  if (bagItem.length === 0) {
    emptyBag.classList.add('active');
    bagItems.classList.remove('active');
  } else {
    emptyBag.classList.remove('active');
    bagItems.classList.add('active');
  }
});

// Bag Notification
const bagNotification = document.querySelectorAll('.bag__notification');
const bagProductCounter = document.querySelectorAll('.bag__product-count');

if (bagItem.length !== 0) {
  bagNotification.forEach((bagNotificationBoth) => {
    bagNotificationBoth.classList.add('active');
  });
  bagProductCounter.forEach((bagProductCounterBoth) => {
    bagProductCounterBoth.innerText = bagItem.length;
  });
} else {
  bagNotification.forEach((bagNotificationBoth) => {
    bagNotificationBoth.classList.remove('active');
  });
}

// sticky navbar
const nav = document.querySelector('.nav__links');
const navLogoIcon = document.querySelector('.nav__logo--icon');
const navLogoText = document.querySelector('.nav__logo--text');

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove('scroll-up');
    navLogoIcon.classList.add('active');
    navLogoText.classList.remove('active');
    return;
  }

  if (currentScroll > 200) {
    navLogoIcon.classList.remove('active');
    navLogoText.classList.add('active');
  }

  if (
    currentScroll > lastScroll &&
    !body.classList.contains('scroll-down') &&
    !nav.classList.contains('nav-active')
  ) {
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains('scroll-down')
  ) {
    body.classList.remove('scroll-down');
    body.classList.add('scroll-up');
  }

  lastScroll = currentScroll;
});

// Footer dropdown & profile page dropdown
const sectionTitle = document.querySelectorAll('[section-title]');

sectionTitle.forEach((sectionBtn) => {
  sectionBtn.addEventListener('click', () => {
    sectionBtn.classList.toggle('selected');
    const sectionParent = sectionBtn.parentElement;
    const sectionContentWrapper = sectionParent.children[1];
    sectionContentWrapper.classList.toggle('active');
  });
});
