import { tiger } from '../lib/index.js';
import { getNode } from './../lib/dom/getNode.js';

let login = getNode(".header__wrapper--member__login")
let logOut = getNode(".header__wrapper--member__logout")

let uniqueId = localStorage.getItem("uniqueId")
let response = await tiger.get("http://localhost:3000/users");
let data = response.data
// console.log(data)


let user = data.find((user) => user.uniqueId === uniqueId);

function logOutCheck(){
  let delConfirm = confirm("로그아웃하시겠습니까?")

  if(delConfirm){
    localStorage.removeItem("uniqueId")
    alert("로그아웃되었습니다")
    logOut.style.display = "none"
    login.style.display = ""
    location.href = 'index.html';
  } else{
    return 
  }
}

if(!localStorage.uniqueId || user == undefined){
  logOut.style.display = "none"
}else if(localStorage.uniqueId){
  login.style.display = "none"
}


logOut.addEventListener("click",logOutCheck)