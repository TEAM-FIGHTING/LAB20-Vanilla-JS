import { getNode } from './../lib/dom/getNode.js';

const $popupClose = getNode('.popup_btn button:last-child');
const $popup = getNode('.popup');

function closePopup(){
  $popup.style.display="none";
}

$popupClose.addEventListener('click', closePopup);
