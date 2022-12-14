class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header">
  
    <div class="top-bar">
      <div class="mobile-menu">
        <button class="hamburger-icon">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <button class="search-icon">
          <img src="./images/search.svg" />
        </button>
      </div>
      <form class="search-form form">
        <button class="search-btn" type ="button" >
          <img src="./images/search.svg" />
        </button>
        <div class="search-input-container">
          <img src="./images/search.svg" />
          <input
            type="search"
            placeholder="Search.."
            name="search"
            class="search-input opacity"
          />
        </div>
      </form>

      <div class="logo">
        <a href="index.html"
          ><img
            src="./images/muglerlogo.svg"
            alt="MUGLER"
            class="top-bar-logo"
        /></a>
      </div>

      <div class="top-bar-buttons">
        <button class="account-btn">
          <a href="login.html"
            ><img src="./images/account.svg" alt="account"
          /></a>
        </button>
        <button class="basket-btn">
          <a><img src="./images/basket.svg" alt="basket" /></a>
        </button>
      </div>
    </div>

    <nav class="nav-links menu-wrapper">
      <ul class="menu-main">
        <li class="menu-item nav-expand">
          <a href="#" class="menu-bar-link nav-expand-link">
            Frangrance
          </a>
          <div class="menu-sub nav-expand-content">
            <div class="menu-flex">
              <div class="menu-col-1 nav-expand">
                <a class="menu-category nav-expand-link">
                  New
                  
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">Alien Goddess</a></li>
                  <li><a href="#">Angel Nova</a></li>
                  <li><a href="#">Alien Mirage</a></li>
                </ul>

                <div class="nav-expand">
                  <a class="menu-category nav-expand-link">
                    Gifts
                  </a>
                  <ul class="nav-expand-content">
                    <li><a href="#">Gifts Sets for Her</a></li>
                    <li><a href="#">Gifts Sets for Him</a></li>
                  </ul>
                </div>
              </div>

              <div class="menu-col-2 nav-expand">
                <a class="menu-category nav-expand-link">
                  Womens' Fragrance
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">Angel</a></li>
                  <li><a href="#">Alien</a></li>
                  <li><a href="#">Alien Goddess</a></li>
                  <li><a href="#">Aura MUGLER</a></li>
                  <li><a href="#">Angel Muse</a></li>
                  <li><a href="#">Womanity</a></li>
                  <li><a href="#">Innocent</a></li>
                </ul>
              </div>

              <div class="menu-col-3 nav-expand">
                <a class="menu-category nav-expand-link">
                  Mens' Fragrance
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">Alien Man</a></li>
                  <li><a href="#">A *Men</a></li>
                </ul>
              </div>

              <div class="menu-col-4 nav-expand">
                <a class="menu-category nav-expand-link">
                  Exclusivities
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">Les Exceptions</a></li>
                  <li><a href="#">MUGLER Cologne</a></li>
                  <li><a href="#">Refills</a></li>
                  <li><a href="#">MUGLER Fountain</a></li>
                </ul>
              </div>

              <div class="menu-col-5 nav-expand">
                <a class="menu-category nav-expand-link">
                  Selections
                </a>
                <ul class="nav-expand-content">
                  <li><a href="#">What's New</a></li>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Gifts & Sets</a></li>
                  <li><a href="#">Scented Candles</a></li>
                  <li><a href="#">Travel Size</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li class="menu-item nav-expand">
          <a href="#" class="menu-bar-link nav-expand-link">
            Fashion
           </a>
          <div class="menu-sub nav-expand-content">
            <div class="menu-flex">
              <div class="menu-col-1">
                <p class="menu-category">
                  Collections
                </p>
              </div>

              <div class="menu-col-2">
                <p class="menu-category">
                 Shop online
                </p>
              </div>

              <div class="menu-col-3">
                <p class="menu-category">
                Find a store
                </p>
              </div>
            </div>
          </div>
        </li>

        <li class="menu-item nav-expand">
          <a href="#" class="menu-bar-link nav-expand-link">
            The fountain
           </a>
          <div class="menu-sub nav-expand-content">
            <div class="menu-flex">
              <div class="menu-col-1">
                <p class="menu-category">
                  Refill in store
                </p>
              </div>

              <div class="menu-col-2">
                <p class="menu-category">
                  Refill at home
                </p>
              </div>
            
            </div>
          </div>
        </li>
        <li class="menu-item nav-expand">
          <a href="#" class="menu-bar-link nav-expand-link">
            About
           </a>
           <div class="menu-sub nav-expand-content">
            <div class="menu-flex">
              <div class="menu-col-1">
                <p class="menu-category">
                  MUGLER World
                </p>
              </div>

              <div class="menu-col-2">
                <p class="menu-category">
                 MUGLER Mag
                </p>
              </div>

              <div class="menu-col-3">
                <p class="menu-category">
                Contact Us
                </p>
              </div>
            </div>
          </div>
        </li>
        </li>
      </ul>
    </nav>
  </header>
  <div id="overlay"></div>
  `;
  }
}

customElements.define("header-component", Header);

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const header = document.querySelector("header");
const main = document.querySelector("main");
// const tabs = document.querySelectorAll("[data-tab-target]");
// const tabContents = document.querySelectorAll("[data-tab-content]");
const searchIconMobile = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");
const overlay = document.getElementById("overlay");
const searchContainer = document.querySelector(".search-input-container");

const hamburgerBtn = document.querySelector(".hamburger-icon");
const navBar = document.querySelector("nav");
const menuLink = document.querySelectorAll(".menu-bar-link");
const menuChevron = document.querySelectorAll(".menu-chevron");
const menuBackArrow = document.querySelectorAll(".menu-arrow-back");
const subMenu = document.querySelector(".menu-sub");
const menuItem = document.querySelectorAll(".menu-item");

const expandList = [].slice.call(document.querySelectorAll(".nav-expand"));
const expandLink = document.querySelectorAll(".nav-expand-link");
const expendContent = document.querySelectorAll(".nav-expand-content");

const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
   Back
	</a>
</li>`;

const mql = window.matchMedia("(min-width: 992px)");
const mobileReset = window.matchMedia("(max-width: 992px)");

// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

//Sticky navbar

//Search input

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.classList.toggle("opacity");
});

let isVisible = false;

searchIconMobile.addEventListener("click", () => {
  if (!isVisible) {
    searchForm.classList.add("display");
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
    isVisible = !isVisible;
  } else {
    searchForm.classList.remove("display");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    isVisible = !isVisible;
  }
});

searchIconMobile.addEventListener("click", () => {
  if ((navBar.classList.contains = "navdisplay")) {
    navBar.classList.remove("nav-display");
  }
});

document.addEventListener("mouseup", function (e) {
  if (!searchForm.contains(e.target)) {
    searchForm.classList.remove("display");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
  }
});

document.addEventListener("mouseup", function (e) {
  if (!searchContainer.contains(e.target)) {
    searchInput.classList.add("opacity");
  }
});

//Hamburger menu

mobileReset.onchange = (e) => {
  if (e.matches) {
    hamburgerBtn.classList.remove("active");
    navBar.classList.remove("nav-display");
  }
};

mql.onchange = (e) => {
  if (e.matches) {
    expendContent.forEach((content) => {
      content.style.transform = "translateX(0%)";
    });
  }
};

hamburgerBtn.addEventListener("click", () => {
  expendContent.forEach((content) => {
    content.style.transform = "translateX(-100%)";
  });
  hamburgerBtn.classList.toggle("active");
  navBar.classList.toggle("nav-display");
});

expandList.forEach((item) => {
  item
    .querySelector(".nav-expand-content")
    .insertAdjacentHTML("afterbegin", backLink);

  item
    .querySelector(".nav-expand-link")
    .addEventListener(
      "click",
      () =>
        (item.querySelector(".nav-expand-content").style.transform =
          "translateX(0%)")
    );
  item
    .querySelector(".nav-back-link")
    .addEventListener(
      "click",
      () =>
        (item.querySelector(".nav-expand-content").style.transform =
          "translateX(-100%)")
    );
});

// LOADER

const loader = document.querySelector(".mugler-logo-loader");
const loaderWrapper = document.querySelector(".loader-wrapper");
const body = document.querySelector("body");

function fadeIn() {
  loader.classList.add("fadeIn");
}

function fadeOut() {
  loader.classList.add("fadeOut");
}

function overflowVisible() {
  body.style.overflowY = "scroll";
}

function translateWrapper() {
  loaderWrapper.style.transform = "translateY(-200vh)";
  loaderWrapper.style.visibility = "hidden";
  setTimeout(overflowVisible, 2000);
}

window.addEventListener("load", (e) => {
  fadeIn();
  setTimeout(translateWrapper, 3500);
});
