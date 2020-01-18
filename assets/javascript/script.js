var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = '!"#$%&()*+,-./:;<=>?@[]^_{|}~';

var length = document.getElementById("length");
var genPw = document.getElementById("password");
var genBtn = document.getElementById("generate");
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("symbols");

window.onload = function() {
  genBtn.addEventListener("click", function() {
    var characters = char;
    numBox.checked ? (characters += num) : "";
    symBox.checked ? (characters += sym) : "";

    genPw.value = password(length.value, characters);
  });
};

function password(l, characters) {
  var pwd = "";

  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}
