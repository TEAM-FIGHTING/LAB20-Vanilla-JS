import { getNode } from './../lib/dom/getNode.js';

let login = getNode(".header__wrapper--member__login")
let logOut = getNode(".header__wrapper--member__logout")



function logOutCheck(){
  let delConfirm = confirm("로그아웃하시겠습니까?")

  if(delConfirm){
    localStorage.removeItem("uniqueId")
    alert("로그아웃되었습니다")
    logOut.style.display = "none"
    login.style.display = ""
  } else{
    return 
  }
}

if(!localStorage.uniqueId){
  logOut.style.display = "none"
}else if(localStorage.uniqueId){
  login.style.display = "none"
}


logOut.addEventListener("click",logOutCheck)