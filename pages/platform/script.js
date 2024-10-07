// Accordion Toggle Function
function toggleAccordion(element) {
  const parent = element.parentElement;

  // Close other accordions
  document.querySelectorAll(".accordion-item").forEach((item) => {
    if (item !== parent) {
      item.classList.remove("active");
    }
  });

  // Toggle current accordion
  parent.classList.toggle("active");
}
