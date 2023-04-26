const button = document.getElementById("cta-btn");

button.addEventListener("click", () => {
  button.classList.remove("cta-btn-animation");
  void button.offsetWidth;
  button.classList.add("cta-btn-animation");
});
