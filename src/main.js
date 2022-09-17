import "destyle.css";
import "@material-design-icons/font/filled.css";
import "./style.scss";

const onSubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();

  alert("Success");
};

function decrease() {
  const elem = this.nextElementSibling;
  const value = parseInt(elem.textContent);
  if (value <= 0) return;

  elem.textContent = value - 1;

  const total = document.querySelector("[data-total]");
  const totalValue = parseFloat(total.textContent.slice(1));
  total.textContent = "$" + Math.round((totalValue - parseFloat(this.dataset.decreaseBtn)) * 100) / 100;
}

function increase() {
  const elem = this.previousElementSibling;
  const value = parseInt(elem.textContent);
  elem.textContent = value + 1;

  const total = document.querySelector("[data-total]");
  const totalValue = parseFloat(total.textContent.slice(1));
  total.textContent = "$" + Math.round((totalValue + parseFloat(this.dataset.increaseBtn)) * 100) / 100;
}

(() => {
  const form = document.querySelector(".checkout-form");
  if (!form) throw new Error("Form does not found");
  form.addEventListener("submit", onSubmit);

  const decreaseBtnList = document.querySelectorAll("[data-decrease-btn]");
  [...decreaseBtnList].map((btn) => {
    btn.addEventListener("click", decrease);
  });

  const increaseBtnList = document.querySelectorAll("[data-increase-btn]");
  [...increaseBtnList].map((btn) => {
    btn.addEventListener("click", increase);
  });
})();
