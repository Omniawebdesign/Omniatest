// Référence au champ de formulaire
const phoneNumberField = document.getElementById("phone-number");

// Ajout d'un gestionnaire d'événement "submit" à form
document.getElementById("contact-form").addEventListener("submit", function(event) {
  // Récupération de la valeur du champ de numéro de téléphone
  const phoneNumber = phoneNumberField.value;

  // Vérification si le numéro de téléphone ne commence pas par "06" ou "07"
  if (!phoneNumber.startsWith("06") && !phoneNumber.startsWith("07")) {
    // Affichage d'un message d'erreur
    alert("Le numéro de téléphone doit commencer par '06' ou '07'");

    // Annulation de l'envoi du formulaire
    event.preventDefault();
  }
});
