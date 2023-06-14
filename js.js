var dbUserName = "admin@gmail.com";
var dbPassword = "admin@123";
var count=0;

function clearInput(){
    document.getElementById('email').value="";
    document.getElementById('password').value="";
}
function login(){
var userName = document.getElementById('email').value;
var password = document.getElementById('password').value;

if(userName==dbUserName && password==dbPassword){
  alert("Login Success !");
}else {
    alert("Login Failed !");
    clearInput();
    count++;
    if(count==3){
      alert("your account is loked");
    }
  }
 }

