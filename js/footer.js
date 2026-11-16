
const YOUR_NAME = "Lethabo Magopa";

const today = new Date().toISOString().split("T")[0];

document.getElementById("learner-signature").textContent =
  `${YOUR_NAME} — ${today}`;

