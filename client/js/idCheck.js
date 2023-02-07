import { getNode, tiger } from "../lib/index.js";

const checkButton = getNode("#checkId");
const idValue = getNode("#id");

async function validation() {
  event.preventDefault();
  let data = await tiger.get("http://localhost:3000/users");
  let user = data.data.find((user) => user.username === idValue.value);

  if (user) {
    console.log("이미 사용중인 아이디 입니다.");
  } else {
    console.log("사용 가능한 아이디 입니다.");
  }
}

checkButton.addEventListener("click", validation);
