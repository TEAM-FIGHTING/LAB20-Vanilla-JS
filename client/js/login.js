import { getNode } from "./../lib/dom/getNode.js";
import { tiger } from "../lib/utils/tiger.js";

let loginButton = getNode(".login-form__login-button");
let id = getNode("#userId");
// console.log(id)

let pw = getNode("#userPw");
let response = await tiger.get("http://localhost:3000/user");

let userData = response.data;
// console.log(userData)

loginButton.addEventListener("click", (e) => {
  let idValue = id.value;
  // console.log(idValue)
  let pwValue = pw.value;
  let userObj = userData.find((user) => user.id === idValue);
  if (userObj) {
    e.preventDefault();
    // console.log("있는데이터");
    if (pwValue == userObj.pw) {
      alert("로그인완료");
      localStorage.setItem("uniqueId", userObj.uniqueId);
    } else {
      alert("비밀번호를 확인하세요");
    }
  } else {
    e.preventDefault();
    alert("없는 유저입니다");
  }
});
