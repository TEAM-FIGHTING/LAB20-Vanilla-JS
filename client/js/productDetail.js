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


// 메뉴버튼 클릭
let [productNotice, detailNotice, review, inquiry] = getNodes('.menu-item');

const menuItem = [productNotice, detailNotice, review, inquiry]









// menuItem.addEventListener('click', handlerMenu)


// 버튼 스크롤 이동
let menuButton = getNode('.menu-item');
console.log(menuButton);


function goToScroll(name) {
  let location = name.offset;
  window.scrollTo({ top: location, behavior: 'smooth' });
}


menuButton.addEventListener('click', goToScroll(menuButton));
console.log(menuButton);