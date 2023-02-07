import { getNode, tiger } from "../lib/index.js";

const checkButton = getNode("#checkEmail");
const emailValue = getNode("#email");

async function validation(e) {
  e.preventDefault();
  let data = await tiger.get("http://localhost:3000/users");
  let user = data.data.find((user) => user.email === emailValue.value);

  // if (user) {
  //   console.log("이미 사용중인 이메일 입니다.");
  // } else {
  //   console.log("사용 가능한 이메일 입니다.");
  // }

  if (emailValue.value.trim() !== "") {
    if (user) {
      alert("이미 사용중인 이메일 입니다.");
    } else {
      alert("사용 가능한 이메일 입니다.");
    }
  } else {
    alert("공백은 사용불가능한 이메일 입니다.");
  }




}

checkButton.addEventListener("click", validation);
