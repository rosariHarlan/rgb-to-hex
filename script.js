let r = document.getElementById("red");
let g = document.getElementById("green");
let b = document.getElementById("blue");
let hexCode = document.getElementById("hex");
let redOutput = document.getElementById("red-bg");
let greenOutput = document.getElementById("green-bg");
let blueOutput = document.getElementById("blue-bg");
let slider = document.querySelectorAll("input");

redOutput.innerHTML = r.value;
greenOutput.innerHTML = g.value;
blueOutput.innerHTML = b.value;

slider.forEach((item) => {
  item.addEventListener("change", (e) => {
    let red = Number(r.value).toString(16);
    let green = Number(g.value).toString(16);
    let blue = Number(b.value).toString(16);
    redOutput.innerHTML = r.value;
    greenOutput.innerHTML = g.value;
    blueOutput.innerHTML = b.value;
    hexCode.innerHTML = `#${red}${green}${blue}`;
    document.body.style.backgroundColor = `#${red}${green}${blue}`;
  });
});
