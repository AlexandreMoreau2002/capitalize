// convert to lower function
document.querySelector(".lower").addEventListener("click", function () {
  const texte = document.querySelector("#texte").value;
  const result = convertText(texte, "lower");
  document.querySelector(".result").textContent = result;
});

// convert to upper function
document.querySelector(".upper").addEventListener("click", function () {
  const texte = document.querySelector("#texte").value;
  const result = convertText(texte, "upper");
  document.querySelector(".result").textContent = result;
});

// copy to clipboard function
document.querySelector(".copy").addEventListener("click", function () {
  const resultText = document.querySelector(".result").textContent;
  navigator.clipboard.writeText(resultText).then(
    () => {
      showNotification("Texte copié dans le presse-papier");
    },
    () => {
      showNotification("Échec de la copie du texte");
    }
  );
});

function convertText(text, type) {
  let convertText = type === "upper" ? text.toUpperCase() : text.toLowerCase();
  return capitalizeSentences(convertText);
}

function capitalizeSentences(text) {
  return text.replace(/(?:^|\.\s+)(\w)/g, function (match, p1) {
    return match.replace(p1, p1.toUpperCase());
  });
}

// Notification function
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2500);
}
