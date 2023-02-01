
// import { getNode, getNodes } from '../lib/index.js';
import { getNode, getNodes } from './../lib/dom/getNode.js';

const [...buttons] = getNodes('.accordion');
const [...carts] = getNodes('.cart-icon');


function handler(e){
  let dv = e.currentTarget;
  let ch = dv.children[1]
  let arrowIconImg = getNode('.arrow-icon > img');

  if(ch.style.display=='none'){ 		
    ch.style.display = 'block'; 	
    arrowIconImg.src = './assets/productList/Direction=Up.png'
  }else{ 		
    ch.style.display = 'none'; 	
    arrowIconImg.src = './assets/productList/Direction=Down.png'
  } 
}

for (let button of buttons){
  button.addEventListener('click', handler)
}


function cartHandler(e){
  let dv = e.currentTarget;
  console.log(dv);
}

for (let cart of carts){
  cart.addEventListener('click', cartHandler)
}