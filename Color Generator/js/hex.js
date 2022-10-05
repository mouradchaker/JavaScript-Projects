var colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
console.log(colors.length);
var back = document.getElementById("coleur");
var span = document.getElementById("name");
var buttn = document.getElementById("btn");
var title = document.getElementById("title");

buttn.addEventListener("click", function () {
  var randomColor =
    "#" +
    colors[random()] +
    colors[random()] +
    colors[random()] +
    colors[random()] +
    colors[random()] +
    colors[random()];
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
