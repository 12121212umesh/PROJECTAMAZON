setInterval(function () {
  const date = new Date();
  const time = date.toLocaleTimeString(); // 🕒 Format: HH:MM:SS

  const box = document.querySelector(".box"); // ✅ "box" class select
  if (box) {
    box.innerText = `Local Time: ${time}`;
  }
}, 1000);
