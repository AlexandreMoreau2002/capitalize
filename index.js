// convert to lower function
document.querySelector(".lower").addEventListener("click", function () {
  const texte = document.querySelector("#texte").value;
  console.table(texte);
  const result = texte.toLowerCase();
  console.table(result);
  document.querySelector(".result").textContent = result;
});

// convert to upper function
document.querySelector(".upper").addEventListener("click", function () {
  const texte = document.querySelector("#texte").value;
  console.table(texte);
  const result = texte.toUpperCase();
  console.table(result);
  document.querySelector(".result").textContent = result;
});

// copy to clipboard function
document.querySelector(".copy").addEventListener("click", function () {
  const resultText = document.querySelector(".result").textContent;
  navigator.clipboard.writeText(resultText).then(
    () => {
      // showNotification("Texte copié dans le presse-papier");
      showNotification("La licorne est bien arrivée");
    },
    () => {
      showNotification("Échec de la copie du texte");
    }
  );
});

// Notification function
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2500);
}
