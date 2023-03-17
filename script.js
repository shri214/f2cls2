let heading = document.getElementById("heading");
heading.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  console.log(e.target.innerHTML);
  heading.textContent = "this is maininpulated by javascripts";
  document.querySelector("body").style.backgroundColor = "pink";
});
