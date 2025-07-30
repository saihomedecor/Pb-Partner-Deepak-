// Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
