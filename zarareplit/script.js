const categoryMap = {
  "view all": ["all"],
  "t-shirts": ["t-shirts"],
  "shirts": ["shirts"],
  "polo shirts": ["polo-shirts"],
  "trousers": ["trousers"],
  "denim": ["denim"],
  "jackets|coats": ["jackets", "coats"],
  "hoodies|sweatshirts": ["hoodies", "sweatshirts"],
  "shoes|bags": ["shoes", "bags"],
  "accessories|perfumes": ["accessories", "perfumes"]
};

const filterItems = document.querySelectorAll('.scrollbar li.font');
const cards = document.querySelectorAll('.card-li'); // Fix selector here

// Set default active item
filterItems.forEach(el => el.classList.remove('active'));
document.querySelector('.scrollbar li.font.margin')?.classList.add('active');

filterItems.forEach(item => {
  item.addEventListener("click", function () {
    filterItems.forEach(el => el.classList.remove('active'));
    this.classList.add("active");

    const text = this.textContent.trim().toLowerCase();
    const selectedCategories = categoryMap[text] || [];

    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-id').toLowerCase();
      if (selectedCategories.includes("all")) {
        card.style.display = "block";
      } else {
        card.style.display = selectedCategories.includes(cardCategory) ? "block" : "none";
      }
    });
  });
});
