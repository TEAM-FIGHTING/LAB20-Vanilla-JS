import { getNode, getNodes } from "../lib/index.js";
import { insertLast } from "../lib/dom/insert.js";

const body = getNode("body");
const [...buttons] = getNodes(".accordion");
const [...carts] = getNodes(".cart-icon");
const background = getNode(".background");
const cancelButton = getNode(".add-cart__button > button");

function handler(e) {
  let dv = e.currentTarget;
  let ch = dv.children[1];
  let arrowIconImg = getNode(".arrow-icon > img");

  if (ch.style.display == "none") {
    ch.style.display = "block";
    arrowIconImg.src = "./assets/productList/Direction=Up.png";
  } else {
    ch.style.display = "none";
    arrowIconImg.src = "./assets/productList/Direction=Down.png";
  }
}

for (let button of buttons) {
  button.addEventListener("click", handler);
}

function cartHandler(e) {
  background.style.display = "block";
  let scroll = scrollY;
  body.style.overflow = "scroll";
  body.style.position = "fixed";
  body.style.top = `${-scroll}px`;
  body.style.width = "100%";
  body.style.height = "100%";
}

for (let cart of carts) {
  cart.addEventListener("click", cartHandler);
}

function cancelButtonHandler() {
  background.style.display = "none";
  body.style.removeProperty("overflow");
  body.style.removeProperty("position");
  body.style.removeProperty("top");
  body.style.removeProperty("width");
  body.style.removeProperty("height");
}
cancelButton.addEventListener("click", cancelButtonHandler);
