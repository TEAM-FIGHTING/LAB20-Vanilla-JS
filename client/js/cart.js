import { getNode, getNodes } from './../lib/dom/getNode.js';

const [...buttons] = getNodes('.cart__accordion');

function handler(e) {
  let dv = e.currentTarget;
  let ch = dv.children[1]
  let arrowIconImg = getNode('.arrow-icon > img');

  if (ch.style.display == 'none') {
    ch.style.display = 'block';
    arrowIconImg.src = './assets/cart/Direction=Down.png'
  } else {
    ch.style.display = 'none';
    arrowIconImg.src = './assets/cart/Direction=Up.png'
  }
}

for (let button of buttons) {
  button.addEventListener('click', handler)
}