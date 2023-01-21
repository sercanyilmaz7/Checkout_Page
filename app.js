window.addEventListener("load", () => {
  calTotal();
});
const click = document.querySelector(".box");
const kdv = 0.18;
const shipping = 8;


click.addEventListener("click", (e) => {
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      calProductTotal(e.target.closest(".elements"));
    } else {
      if (confirm("product will be remove")) {
        e.target.closest(".product").remove();
        console.log(e.target);
        calTotal();
      }
    }
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;

    calProductTotal(e.target.closest(".elements"));
  } else if (e.target.classList.contains("btn-remove")) {
    console.log(e.target.closest(".product"));

    e.target.closest(".product").remove();
    calTotal();
  }
});

let calProductTotal = (x) => {
  let price = x.querySelector("b").innerText;

  let quantity = x.querySelector(".amount").innerText;

  let pay = +(price * quantity).toFixed(2);

  x.querySelector(".product-total").innerText = pay;

  calTotal();
};

let calTotal = () => {
  let allProductTotal = document.querySelectorAll(".product-total");
  // console.log(allProductTotal);

  let sumSubtotal = 0;

  allProductTotal.forEach((productTotal) => {
    sumSubtotal += +productTotal.innerText;
  });

  // console.log(sumSubtotal);

  let taxPrice = sumSubtotal * kdv;
  // console.log(taxPrice);

  let shippingPrice = sumSubtotal > 0 ? shipping : 0;

  // console.log(shippingPrice);

  document.getElementById("subtotal").nextElementSibling.innerText =
    "$" + sumSubtotal.toFixed(2);

  document.getElementById("total").nextElementSibling.innerText =
    "$" + (taxPrice + shippingPrice + sumSubtotal).toFixed(2);

  document.getElementById("tax").nextElementSibling.innerText =
    "$" + taxPrice.toFixed(2);

  document.getElementById("shipping").nextElementSibling.innerText =
    "$" + shippingPrice;
};
