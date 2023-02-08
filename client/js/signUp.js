import { tiger } from "../lib/index.js";
import { getNode, getNodes } from "./../lib/dom/getNode.js";

const node = getNodes(".register-form__input");
const registerBtn = getNode(".register-form__register-button");
let genders = getNodes("input[name=gender]")

const password_node = getNode(".pw");
const email_node = getNode(".email");
const confirmPw_node = getNode(".confirmPw");


// 회원가입 버튼 활성화
const inputId = getNode(".id");
const inputPw = getNode(".pw");
const confirmPw = getNode(".confirmPw");
const name = getNode(".name");
const email = getNode(".email");
const phone = getNode(".phone");

if (inputId.value == "" || inputPw.value == "") {
  registerBtn.disabled = true;
}

function validate() {
  if (!(inputId.value && inputPw.value && confirmPw.value && name.value && email.value && phone.value)) {
    registerBtn.disabled = true;
  } else {
    registerBtn.disabled = false;
    registerBtn.style.cursor = "pointer";
  }

  if (!(inputId.value && inputPw.value && confirmPw.value && name.value && email.value && phone.value)) {
    registerBtn.classList.remove("register-button-disabled");
  } else {
    registerBtn.classList.add("register-button-disabled");
  }
}

inputId.addEventListener("keyup", validate);
inputPw.addEventListener("keyup", validate);
confirmPw.addEventListener("keyup", validate);
name.addEventListener("keyup", validate);
email.addEventListener("keyup", validate);
phone.addEventListener("keyup", validate);
// 회원가입 버튼 활성화 끝

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


// 성별 라디오 감지
genders.forEach((list)=>list.addEventListener("change",()=>{
  for(let i = 0; i < genders.length; i++){
    if(genders[i].checked === true) {
      genders[i].setAttribute("checked",true)
    }else{
      genders[i].removeAttribute("checked")
    }
  }
}))


tiger.get("http://localhost:3000/users")

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
  let gender = getNode("input[name=gender]:checked").value

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

  let pwTrim = pw.trim()
  let confirmPwTrim = confirmPw.trim()

  // 비밀번호 조건 : 8자 이상 입력
  if (pwTrim.length < 8) {
    // throw new Error("비밀번호를 8자 이상 입력하세요");
    alert("비밀번호를 8자 이상 입력하세요");
    password_node.focus();
    return;
  }

  if (pwTrim !== confirmPwTrim) {
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
    gender
  };
  return body;
}

registerBtn.addEventListener("click", () => {
  tiger.post("http://localhost:3000/users",onSubmit())
  });

