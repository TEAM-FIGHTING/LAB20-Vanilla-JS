import { getNode, getNodes} from "./../lib/index.js";


let [first, second] = getNodes('.review__list');
let [one, two] = getNodes('.inquiry__list')
const list = [first, second];
const inquiryList = [one, two]


function handlerList(e) {
  let p = e.currentTarget.children[2]
  
  if (p.style.display === 'none' || p.style.display === '') {
    p.style.display = 'block';
  } else {
    p.style.display = 'none'
  }

}



list.forEach(listIndex => {
  listIndex.addEventListener('click', handlerList);
});

inquiryList.forEach(listIndex => {
  listIndex.addEventListener('click', handlerList);
});
