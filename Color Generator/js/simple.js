var colors = ["red", "yellow", "blue", "green", "pink"];
console.log(colors.length);
var back = document.getElementById("coleur");
var span = document.getElementById("name");
var buttn = document.getElementById("btn");

buttn.addEventListener("click", function () {
  var randomColor = colors[random()];
  console.log(randomColor);
  span.innerHTML = randomColor;
  span.style.color = randomColor;
  back.style.backgroundColor = randomColor;
  buttn.style.backgroundColor = randomColor;
  title.style.color = randomColor;
});

function random() {
  return Math.floor(Math.random() * colors.length);
}
