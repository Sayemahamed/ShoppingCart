let id = (id) => document.getElementById(id);
let bill = id("bill");
let updateForTheFirstTime = () => {
  cart = JSON.parse(localStorage.getItem("data")) || [];
  let x = 0,
    y = 0;
  cart.forEach((element) => {
    x += element.price * element.quantity;
    y += element.quantity;
  });
  id("total").innerText = y;
  id("sumOfBills").innerText = x;
};
updateForTheFirstTime();
let displayBill = () => {
  return (bill.innerHTML = cart.map((item) => {
    return `<div>
    <img src="image/${item.id}.jpg" />
    <div class="details">
      <h3>${itemList[item.id - 1].name}</h3>
      <p>${itemList[item.id - 1].description}</p>
      <button onclick="">
        <i class="fa-solid fa-circle-xmark fa-xl"></i>
      </button>
      <h3 class="totalAmount">
        Total Amount: $
        <span>${item.quantity * item.price}</span>
      </h3>
    </div>
  </div>`;
  }));
};
displayBill();
