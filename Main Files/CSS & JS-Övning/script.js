document.querySelector(".green").addEventListener("click", () => {
  if(document.body.style.backgroundColor == "lightgreen") {
    document.body.style.backgroundColor = "white"
  }
  else {
    document.body.style.backgroundColor = "lightgreen";
  }
});

document.querySelector(".red").addEventListener("click", () => {
  if(document.body.style.backgroundColor == "lightpink") {
    document.body.style.backgroundColor = "white"
  }
  else {
    document.body.style.backgroundColor = "lightpink";
  }
});

document.querySelector(".blue").addEventListener("click", () => {
  if(document.body.style.backgroundColor == "lightblue") {
    document.body.style.backgroundColor = "white"
  }
  else {
    document.body.style.backgroundColor = "lightblue";
  }
});