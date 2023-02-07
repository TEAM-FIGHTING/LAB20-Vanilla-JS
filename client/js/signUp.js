import { xhrData } from "../lib/utils/xhr.js";
import { getNode, getNodes } from "./../lib/dom/getNode.js";

const node = getNodes(".register-form__input");
const registerBtn = getNode(".register-form__register-button");

const idInput = getNode(".id");
const passwordInput = getNode(".pw");
const confirmPwInput = getNode(".confirmPw");
const nameInput = getNode(".name");
const emailInput = getNode(".email");
const phoneInput = getNode(".phone");

const pwValidationText = getNode(".pw-validation-text");
const confirmPwValidationText = getNode(".confirmPw-validation-text");
const emailValidationText = getNode(".email-validation-text");

idInput.addEventListener("keyup", validate);
passwordInput.addEventListener("keyup", handleValidatePw);
confirmPwInput.addEventListener("keyup", validateConfirmPw);
nameInput.addEventListener("keyup", validate);
emailInput.addEventListener("keyup", validateEmail);
phoneInput.addEventListener("keyup", validate);

function validate() {
  event.preventDefault();

  if (
    !(
      !validatePasswordLimitLength(passwordInput.value) &&
      passwordInput.value === confirmPwInput.value &&
      (emailInput.value.includes(".") == true ||
        emailInput.value.includes("@") == true) &&
      idInput.value &&
      passwordInput.value &&
      confirmPwInput.value &&
      nameInput.value &&
      emailInput.value &&
      phoneInput.value
    )
  ) {
    registerBtn.disabled = true;
    registerBtn.classList.remove("register-button-disabled");
  } else {
    registerBtn.disabled = false;
    registerBtn.classList.add("register-button-disabled");
  }
}

function validatePasswordLimitLength(value, limit = 8) {
  return value.trim().length < limit;
}

function handleValidatePw(e) {
  event.preventDefault();
  let passwordInputTarget = e.target;
  // let id = passwordInputTarget.id;

  let key = passwordInputTarget.value;

  passwordInput.setAttribute("value", key);
  let inputValue = passwordInput.value;

  if (validatePasswordLimitLength(inputValue)) {
    pwValidationText.innerHTML = "8자리 이상 입력해주세요";
  } else {
    pwValidationText.innerHTML = "";
  }

  validate();
}

function validateConfirmPw(e) {
  event.preventDefault();
  let confirmPwInputTarget = e.target;

  let key = confirmPwInputTarget.value;

  confirmPwInput.setAttribute("value", key);
  let inputValue = confirmPwInput.value;

  if (passwordInput.value !== inputValue) {
    confirmPwValidationText.innerHTML = "동일한 비밀번호를 입력하세요";
  } else {
    confirmPwValidationText.innerHTML = "";
  }

  validate();
}

function validateEmail(e) {
  let emailInputTarget = e.target;

  let key = emailInputTarget.value;

  emailInput.setAttribute("value", key);
  let inputValue = emailInput.value;

  if (
    emailInputTarget.value.includes(".") == false ||
    emailInputTarget.value.includes("@") == false
  ) {
    emailValidationText.innerHTML = "올바른 이메일 양식을 입력하세요";
  } else {
    emailValidationText.innerHTML = "";
  }

  validate();
}

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
xhrData.get("http://localhost:3000/users");

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

  let pwTrim = pw.trim();
  let confirmPwTrim = confirmPw.trim();

  // 비밀번호 조건 : 8자 이상 입력
  if (pwTrim.length < 8) {
    // throw new Error("비밀번호를 8자 이상 입력하세요");
    alert("비밀번호를 8자 이상 입력하세요");
    passwordInput.focus();
    return;
  }

  if (pwTrim !== confirmPwTrim) {
    alert("동일한 비밀번호를 입력하세요");
    confirmPwInput.focus();
    return;
  }

  // 이메일 조건 : 최소 `@`, `.` 포함
  if (email.includes(".") == false || email.includes("@") == false) {
    alert("올바른 이메일 양식을 입력하세요");
    emailInput.focus();
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
  xhr.open("POST", "http://localhost:3000/users");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(onSubmit()));
});
