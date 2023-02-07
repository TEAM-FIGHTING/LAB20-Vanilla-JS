import { getNode, tiger } from "../lib/index.js";

const checkButton = getNode("#checkId");
const idValue = getNode("#id");

async function validation() {
  event.preventDefault();
  let data = await tiger.get("http://localhost:3000/users");
  console.log(data.data)
  let user = data.data.find((user) => user.id === idValue.value);


  if (idValue.value.trim() !== "") {
    if (user) {
      alert("이미 사용중인 아이디 입니다.");
    } else {
      alert("사용 가능한 아이디 입니다.");
    }
  } else {
    alert("공백은 사용불가능한 아이디입니다.");
  }
}
  





checkButton.addEventListener("click", validation);
