
import { tiger } from './../lib/utils/tiger.js';
let uniqueId = localStorage.getItem("uniqueId")
let response = await tiger.get("http://localhost:3000/users");
let data = response.data
console.log(data)


let user = data.find((user) => user.uniqueId === uniqueId);

if(user == undefined){
  alert("로그인이 필요합니다")
  location.href = 'login.html';
}