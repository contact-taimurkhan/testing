const btn = document.querySelector("button");
const box = document.querySelector(".box");
btn.addEventListener("click", func);

function func() {
  //   box.classList.add("d-none");
  //   box.classList.toggle("d-none");

  if (box.classList.contains("d-none")) {
    box.classList.remove("d-none");
  } else {
    box.classList.add("d-none");
  }
}
