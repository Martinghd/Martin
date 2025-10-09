// script.js — logique simple pour interactions de base

// Exemple : Fermer un éventuel modal avec la touche "Échap"
// (ceci est un placeholder — tu peux le compléter plus tard)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    console.log('Touche Échap pressée — aucune action définie');
    // Tu peux ici ajouter une logique pour fermer un menu ou un popup
  }
});

// Exemple : simuler l'envoi de formulaire (formulaire fictif)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("Formulaire envoyé (fictif) — à remplacer par un vrai backend.");
    });
  }
});

