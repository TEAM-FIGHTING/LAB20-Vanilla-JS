
// import { getNode, getNodes } from '../lib/index.js';
import { insertLast } from '../lib/dom/insert.js';
import { getNode, getNodes } from './../lib/dom/getNode.js';

const body = getNode('body')
const [...buttons] = getNodes('.accordion');
const [...carts] = getNodes('.cart-icon');
const back = getNode('.back');
const cancelButton = getNode('.add-cart__button > button')

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

  back.style.display = 'block';
  let scroll = scrollY;
  console.log(scroll);
  body.style.overflow = 'scroll';
  body.style.position =  'fixed';
  body.style.top = `${-scroll}px`
  body.style.width = '100%';
  body.style.height = '100%'
  
}

for (let cart of carts){
  cart.addEventListener('click', cartHandler)
}



function cancelButtonHandler() {
  back.style.display = 'none';
  body.style.overflow = 'visible';
  body.style.position =  'static';
}
cancelButton.addEventListener('click', cancelButtonHandler)

