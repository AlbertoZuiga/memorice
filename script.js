document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const showCard = (card) => {
    card.classList.add("card-front");
    card.classList.remove("card-back");
    card.textContent = card.dataset.val;
  };

  const handleCardClick = (event) => {
    showCard(event.target);
  };

  cards.forEach((card) => card.addEventListener("click", handleCardClick));
});
