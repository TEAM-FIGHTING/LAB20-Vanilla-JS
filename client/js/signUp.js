import { xhrData } from "../lib/utils/xhr.js";
import { getNode, getNodes } from "./../lib/dom/getNode.js";

const node = getNodes(".register-form__input");
const registerBtn = getNode(".register-form__register-button");
const password_node = getNode(".pw");
const email_node = getNode(".email");
const confirmPw_node = getNode(".confirmPw");

//uniqueID만드는 함수
const generateRandomString = (num) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

//xhr 오픈
const xhr = new XMLHttpRequest();
xhrData.get("http://localhost:3000/user");

function onSubmit() {
  event.preventDefault();

  let temp = [];
  for (let i = 0; i < node.length; i++) {
    temp.push(node[i].value);
  }

  let id = temp[0];
  let pw = temp[1];
  let confirmPw = temp[2];
  let name = temp[3];
  let email = temp[4];
  let phone = temp[5];
  let uniqueId = generateRandomString(10);

  if (
    id == "" ||
    pw == "" ||
    confirmPw == "" ||
    name == "" ||
    email == "" ||
    phone == ""
  ) {
    alert("모든값을 입력하세요");
    return null;
  }

  // 비밀번호 조건 : 8자 이상 입력
  if (pw.length < 8) {
    // throw new Error("비밀번호를 8자 이상 입력하세요");
    alert("비밀번호를 8자 이상 입력하세요");
    password_node.focus();
    return;
  }

  if (pw !== confirmPw) {
    alert("동일한 비밀번호를 입력하세요");
    confirmPw_node.focus();
    return;
  }

  // 이메일 조건 : 최소 `@`, `.` 포함
  if (email.includes(".") == false || email.includes("@") == false) {
    alert("올바른 이메일 양식을 입력하세요");
    email_node.focus();
    return;
  }

  let body = {
    id,
    pw,
    confirmPw,
    name,
    email,
    phone,
    uniqueId,
  };
  return body;
}

registerBtn.addEventListener("click", () => {
  xhr.open("POST", "http://localhost:3000/user");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(onSubmit()));
});
