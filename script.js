document.addEventListener("DOMContentLoaded", () => {
  const FLIP_DELAY_MS = 600;

  const turnsCounter = document.getElementById("turns_count");
  const cards = document.querySelectorAll(".card");

  let turns = 0;
  let selectedCards = [];
  let isProcessing = false;

  const shuffleValues = () => {
    const values = Array.from(cards).map((card) => card.dataset.val);
    const shuffled = values.toSorted(() => Math.random() - 0.5);
    cards.forEach((card, index) => {
      card.dataset.val = shuffled[index];
    });
  };

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
    setTimeout(() => {
      if (cardsMatch(cardA, cardB)) {
        cardA.classList.add("hidden");
        cardB.classList.add("hidden");
      } else {
        hideCard(cardA);
        hideCard(cardB);
      }
      selectedCards = [];
      isProcessing = false;
    }, FLIP_DELAY_MS);
  };

  const handleCardClick = (event) => {
    const card = event.target;
    if (isProcessing || card.classList.contains("card-front") ||
        selectedCards.includes(card)) {
      return;
    }

    showCard(card);
    selectedCards.push(card);

    if (selectedCards.length === 2) {
      isProcessing = true;
      turns += 1;
      turnsCounter.textContent = turns;
      resolveTurn();
    }
  };

  shuffleValues();
  cards.forEach((card) => card.addEventListener("click", handleCardClick));
});
