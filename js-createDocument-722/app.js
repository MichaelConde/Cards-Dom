import { environments } from "./environment.js";
window.addEventListener('DOMContentLoaded',makeCards(environments))


function makeCards(environments) {
  environments.forEach(element => {
    createCard(element);
  });
}
function createCard(environments) {
  const container = document.getElementById('content_cards');
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
      <img src="${environments.img}" alt="${environments.tittle}" class="imgCards">
      <h2>${environments.title}</h2>
      <p> ${environments.description}</p>
     
     
  `;
  container.appendChild(card);
}
