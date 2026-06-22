document.addEventListener("DOMContentLoaded", () => {
  const turnsCounter = document.getElementById("turns_count");
  const cards = document.querySelectorAll(".card");

  let turns = 0;
  let selectedCards = [];

  const showCard = (card) => {
    card.classList.add("card-front");
    card.classList.remove("card-back");
    card.textContent = card.dataset.val;
  };

  const hideCard = (card) => {
    card.classList.add("card-back");
    card.classList.remove("card-front");
    card.textContent = "";
  };

  const cardsMatch = (cardA, cardB) => cardA.dataset.val === cardB.dataset.val;

  const resolveTurn = () => {
    const [cardA, cardB] = selectedCards;
    if (cardsMatch(cardA, cardB)) {
      cardA.classList.add("hidden");
      cardB.classList.add("hidden");
    } else {
      hideCard(cardA);
      hideCard(cardB);
    }
    turns += 1;
    turnsCounter.textContent = turns;
    selectedCards = [];
  };

  const handleCardClick = (event) => {
    const card = event.target;
    if (card.classList.contains("card-front") || selectedCards.includes(card)) {
      return;
    }

    showCard(card);
    selectedCards.push(card);

    if (selectedCards.length === 2) {
      resolveTurn();
    }
  };

  cards.forEach((card) => card.addEventListener("click", handleCardClick));
});
