//register form
const buttonTransform = document.querySelector(".btn-outline-light");
const cover = document.querySelector(".cover");
const signUpBtn = document.querySelector(".signUp-button");
let userName;
let EmailUser;
let passwordUser;
let todoList;
//login form

let email;
let pass;
const signInBtn = document.querySelector(".signin-button");

buttonTransform.addEventListener("click", transform);
signUpBtn.addEventListener("click", saveInfo);
signInBtn.addEventListener("click", signIn);

function transform() {
  cover.style.transform = "translate(-100%)";
  cover.children[1].innerText =
    "to keep conntected with us please login with your personal info";
  cover.children[0].innerText = "Welcome back!";
  if (cover.children[2].innerText == "SIGN IN") {
    cover.style.transform = "translate(0%)";
    cover.children[0].innerText = "Hello, Friend!";
    cover.children[1].innerText =
      "Enter your personal details and start journey with us";
    cover.children[2].innerText = "SING UP";
  } else {
    cover.children[2].innerText = "SIGN IN";
  }
}

function saveInfo() {
  userName = document.querySelector(".userName").value;
  EmailUser = document.querySelector(".EmailUser").value;
  passwordUser = document.querySelector(".passwordUser").value;
  if (userName.trim() == "") alert("Please inter userName!!!");
  else if (EmailUser.trim() == "") alert("Please inter your Email");
  else if (passwordUser.trim() == "") alert("Please inter password");
  else if (
    EmailUser.search(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) == 0
  ) {
    const dataUser = {
      userName,
      EmailUser,
      passwordUser,
      todoList,
    };
    savelocalStorage(dataUser);
    document.querySelector(".userName").value = "";
    EmailUser = document.querySelector(".EmailUser").value = "";
    passwordUser = document.querySelector(".passwordUser").value = "";
  } else {
    alert("your Email is invalid!!");
  }
}
function signIn() {
  email = document.querySelector(".email");
  pass = document.querySelector(".password").value;
  if (email.value.trim() == "") alert("Please inter your Email");
  else if (pass.trim() == "") alert("Please inter password");
  else if (
    email.value.search(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) == 0
  ) {
    let data = localStorage.getItem("Users")
      ? JSON.parse(localStorage.getItem("Users"))
      : [];
    const findUser = data.filter((i) => email.value === i.EmailUser);
    console.log(email.value);
    if (findUser.length > 0) {
      if (pass === findUser[0].passwordUser) {
        alert(`welcome ${findUser[0].userName}`);
      } else {
        alert("incorrect password");
      }
    } else {
      alert("incorrect Email");
    }
  } else {
    alert("invalid Email");
  }
}

function savelocalStorage(data) {
  let saveInfo = localStorage.getItem("Users")
    ? JSON.parse(localStorage.getItem("Users"))
    : [];
  const findPreviousUser = saveInfo.find((i) => EmailUser === i.EmailUser);
  if (findPreviousUser) {
    alert("your Email is already Exist!!!");
    return;
  } else {
    saveInfo.push(data);
    localStorage.setItem("Users", JSON.stringify(saveInfo));
    alert("wellcome to our website");
  }
}
