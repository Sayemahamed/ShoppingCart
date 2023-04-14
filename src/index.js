let id = (id) => document.getElementById(id);
let display = id("display");
let displayProducts = () => {
  return (display.innerHTML = itemList
    .map((item) => {
      let { img, id, name, price, description } = item;
      return `<div>
    <img src="${img}" />
    <div>
      <h3>${name}</h3>
      <p>${description}</p>
      <div>
        <h2>$${price}</h2>
        <div class="amount">
          <i onclick="decrement(${id})" class="fa-solid fa-minus fa-l"></i>
          <div id="${id}">0</div>
          <i onclick="increment(${id})" class="fa-solid fa-plus fa-l"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};
displayProducts();
let increment = (x) => {
  let item = itemList.find((item) => item.id === x);
  let temp = cart.find((x) => x.id === item.id);
  if (temp === undefined) {
    cart.push({
      id: item.id,
      price: item.price,
      quantity: 1,
    });
    id(x).innerText = 1;
  } else {
    temp.quantity += 1;
    id(x).innerText = temp.quantity;
  }
  update();
};
let decrement = (x) => {
  let item = itemList.find((item) => item.id === x);
  let temp = cart.find((x) => x.id === item.id);
  if (temp === undefined);
  else {
    temp.quantity -= 1;
    id(x).innerText = temp.quantity;
    if (temp.quantity === 0) cart = cart.filter((item) => item.quantity !== 0);
  }
  update();
};
let update = () => {
  let x = 0;
  cart.forEach((item) => {
    x += item.quantity;
  });
  id("total").innerText = x;
  localStorage.setItem("data", JSON.stringify(cart));
};
let updateForTheFirstTime = () => {
  cart = JSON.parse(localStorage.getItem("data")) || [];
  cart.forEach((item) => {
    id(item.id).innerText = item.quantity;
  });
  update();
};
updateForTheFirstTime();
console.log(cart);
