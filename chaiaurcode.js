const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const c = e.target.id;

    switch (c) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "blue":
        body.style.backgroundColor = "blue";
        break;

      case "yellow":
        body.style.backgroundColor = "yellow";
        break;

      case "white":
        body.style.backgroundColor = "white";
        break;

      default:
        body.style.backgroundColor = "initial"; // default color reset
        break;
    }
  });
});
