const cartIcon = document.querySelector(".nav-cart");
const cartMenu = document.querySelector(".cart-menu");

const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const quantity = document.querySelector(".quantity").childNodes[3];

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".links-container");

console.log(quantity.textContent);

cartIcon.addEventListener("click", () => {
  if (cartMenu.style.maxHeight == "0px") {
    cartMenu.style.maxHeight = `${cartMenu.scrollHeight}px`;
  } else {
    cartMenu.style.maxHeight = "0px";
  }
});

minusBtn.addEventListener("click", () => {
  if (quantity.textContent == 0) {
    console.log("Neg");
  } else {
    quantity.textContent = parseInt(quantity.textContent) - 1;
  }
});

plusBtn.addEventListener("click", () => {
  quantity.textContent = parseInt(quantity.textContent) + 1;
});

console.log(menu.children[0].children[0]);

menuIcon.addEventListener("click", () => {
  if (menuIcon.classList == "menu-icon close-menu") {
    menuIcon.classList.toggle("close-menu");

    menu.style.width = "0";
    menu.style.padding = "0";
    for (const li of menu.children[0].children) {
      li.style.left = "-70px";
    }
    // menu.children[0].children[0].style.left = "-50px";
  } else {
    menu.style.width = "50vw";
    menuIcon.classList.toggle("close-menu");
    menu.style.padding = "6rem 2rem";
    for (const li of menu.children[0].children) {
      li.style.left = "0px";
    }
    // menu.children[0].children[0].style.left = "0";
  }
});
