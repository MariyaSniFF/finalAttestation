document.querySelector(".form__btn").onclick = function () {
  const userPassFirst = document.querySelector("#passwordFirst").value;
  const userPassSecond = document.querySelector("#re__password").value;

  if (userPassFirst == "") {
    document.getElementById("passwordFirst").style = "border: 1px solid red";
    document.getElementById("re__password").style = "border: 1px solid red";
  } else if (userPassFirst != userPassSecond) {
    document.getElementById("passwordFirst").style = "border: 1px solid red";
    document.getElementById("re__password").style = "border: 1px solid red";
    return false;
  } else if (userPassFirst == userPassSecond) {
    document.getElementById("passwordFirst").style = "border: 1px solid green";
    document.getElementById("re__password").style = "border: 1px solid green";
  }
  return true;
};
