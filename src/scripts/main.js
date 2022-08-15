const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    current = section.getAttribute("id");

    if (
      scrollY >= sectionTop - 100 &&
      scrollY < sectionTop + sectionHeight - 100
    ) {
      document
        .querySelector('li a[href*="' + current + '"]')
        .classList.add("active");
    } else {
      document
        .querySelector('li a[href*="' + current + '"]')
        .classList.remove("active");
    }
    if (window.pageYOffset == 0) {
      document
        .querySelector('li a[href*="' + current + '"]')
        .classList.remove("active");
    }
  });
});

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY > 10) {
    document.querySelector("nav").classList.add("scrollNav");
  } else {
    document.querySelector("nav").classList.remove("scrollNav");
  }
});
