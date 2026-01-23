let greenCount = 0;
let redCount = 0;
let blueCount = 0;
let totalCount = 0;

document.querySelector(".green").addEventListener("click", () => {
  greenCount += 1;
  totalCount += 1;
    document.getElementById("greenScore").textContent = greenCount;
  if (document.body.style.backgroundColor === "lightgreen") {
    document.body.style.backgroundColor = "white"
  }
  else {
    document.body.style.backgroundColor = "lightgreen";
  }
});

document.querySelector(".red").addEventListener("click", () => {
  redCount += 2;
  totalCount += 2;
  document.getElementById("redScore").textContent = redCount;
  if (document.body.style.backgroundColor === "lightpink") {
    document.body.style.backgroundColor = "white"
  }
  else {
    document.body.style.backgroundColor = "lightpink";
  }
});

document.querySelector(".blue").addEventListener("click", () => {
  blueCount += 3;
  totalCount += 3;
    document.getElementById("blueScore").textContent = blueCount;
  if (document.body.style.backgroundColor === "lightblue") {
    document.body.style.backgroundColor = "white"
  }
  else {
    document.body.style.backgroundColor = "lightblue";
  }
});

if (totalCount >= 15) {
  
}

document.getElementById("greenScore").textContent = greenCount;
document.getElementById("redScore").textContent = redCount;
document.getElementById("blueScore").textContent = blueCount;

