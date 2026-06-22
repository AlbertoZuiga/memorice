document.addEventListener("DOMContentLoaded", () => {
  // --- Constantes ---
  const FLIP_DELAY_MS = 600;
  const PAIR_SIZE = 2;

  const turnsCounter = document.getElementById("turns_count");

  // --- Estado del juego ---
  let turns = 0;
  let selectedCards = [];
  let isProcessing = false;

  // --- Funciones puras ---
  const getCards = () => Array.from(document.querySelectorAll(".card"));

  const getValues = (cards) => cards.map((card) => card.dataset.val);

  const shuffle = (values) => values.toSorted(() => Math.random() - 0.5);

  const cardsMatch = (cardA, cardB) => cardA.dataset.val === cardB.dataset.val;

  const isSelectable = (card) =>
    !isProcessing &&
    !card.classList.contains("card-front") &&
    !card.classList.contains("hidden") &&
    !selectedCards.includes(card);

  // --- Efectos sobre el DOM ---
  const showCard = (card) => {
    card.classList.replace("card-back", "card-front");
    card.textContent = card.dataset.val;
  };

  const hideCard = (card) => {
    card.classList.replace("card-front", "card-back");
    card.textContent = "";
  };

  const removeCard = (card) => card.classList.add("hidden");

  const assignValues = (cards, values) =>
    cards.forEach((card, index) => {
      card.dataset.val = values[index];
    });

  const updateTurns = () => {
    turns += 1;
    turnsCounter.textContent = turns;
  };

  // --- Lógica de turno ---
  const resolveTurn = (cardA, cardB) => {
    const action = cardsMatch(cardA, cardB) ? removeCard : hideCard;
    setTimeout(() => {
      action(cardA);
      action(cardB);
      selectedCards = [];
      isProcessing = false;
    }, FLIP_DELAY_MS);
  };

  const handleCardClick = (event) => {
    const card = event.target;
    if (!isSelectable(card)) return;

    showCard(card);
    selectedCards.push(card);

    if (selectedCards.length === PAIR_SIZE) {
      isProcessing = true;
      updateTurns();
      resolveTurn(selectedCards[0], selectedCards[1]);
    }
  };

  // --- Inicialización ---
  const init = () => {
    const cards = getCards();
    assignValues(cards, shuffle(getValues(cards)));
    cards.forEach((card) => card.addEventListener("click", handleCardClick));
  };

  init();
});
