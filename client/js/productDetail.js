import { getNode, getNodes } from "./../lib/index.js";


const listOfArticle = getNode('.review__list');
const textOfList = getNode('.review__text');







function handlerList() {
  let none = textOfList.style.display = 'none';

  return () => {
    if (!none) {
      textOfList.style.display = 'none';
    } else {
      textOfList.style.display = 'block';
    }

    none = !none;
  }
}

listOfArticle.addEventListener('click', handlerList());
