const btn = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const heading = document.querySelector(".heading");
const reset = document.querySelector(".reset");

bgChange();
resetAll();

function bgChange() {
  btn.forEach((e) => {
    e.addEventListener("click", () => {
      body.style.backgroundColor = e.id;
      heading.style.color = "white";
    });
  });
}

function resetAll() {
  reset.addEventListener("click", () => {
    body.style.backgroundColor = reset.id;
    heading.style.color = "black";
  });
}
