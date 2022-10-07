var here = document.getElementById("ecrit");
var ajout = document.getElementById("ajouter");
var father = document.getElementById("genrl");

ajout.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.innerHTML = here.value;
  father.appendChild(paragraph);
  paragraph.style.marginBottom = "20px";
  here.value = "";
  paragraph.addEventListener("dblclick", function () {
    father.removeChild(paragraph);
  });
});
