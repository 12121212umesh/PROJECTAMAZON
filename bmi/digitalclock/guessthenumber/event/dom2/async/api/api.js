const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button"); // ✅ assumes one button

// Fill currency options
dropdowns.forEach((select) => {
  for (let code in countryList) {
    const option = document.createElement("option");
    option.value = code;
    option.innerText = code;

    // Set default currencies
    if (select.name === "from" && code === "USD") {
      option.selected = true;
    } else if (select.name === "to" && code === "INR") {
      option.selected = true;
    }

    select.appendChild(option);
  }

  // Update flag on change
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
});

// Update flag image when currency changes
function updateFlag(element) {
  const code = element.value;
  const countryCode = countryList[code];

  if (!countryCode) return;

  // Get the image in the same container
  const img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Set initial flags for both dropdowns
dropdowns.forEach((select) => updateFlag(select));

// Handle button click
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let amount = document.querySelector(".amount input");
  let amountVal = amount.value;
  console.log(amountVal); // ✅ logs entered amount
});
