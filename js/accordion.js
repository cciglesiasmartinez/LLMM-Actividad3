const accordionList = document.querySelectorAll(".accordion-item");

accordionList.forEach((event) =>
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      accordionList.forEach((event2) => event2.classList.remove("active"));
      event.classList.add("active");
    }
  })
);
