const tabs = document.querySelectorAll(".tabs button");
const cards = document.querySelectorAll(".card");

function updateCards(period) {
  cards.forEach(card => {
    const current = card.querySelector(".current");
    const previous = card.querySelector(".previous");

    const hrs = card.dataset[period];
    const prev = card.dataset[`${period}Prev`];

    current.textContent = `${hrs}hrs`;
    previous.textContent = `Previous - ${prev}hrs`;
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tabs .active").classList.remove("active");
    tab.classList.add("active");
    updateCards(tab.dataset.period);
  });
});

// default view
updateCards("weekly");
