let cart = [];

let total = 0;

let restaurantMenus = {

  spicy: {
    name: "The Spicy House",
    type: "Indian • Chinese",
    image: "🍛",
    rating: "4.5",
    foods: [
      ["Paneer Tikka",120,"🍢"],
      ["Veg Manchurian",100,"🥘"],
      ["Chicken 65",150,"🍗"]
    ]
  },

  pizza: {
    name: "Pizza Palace",
    type: "Pizza • Italian",
    image: "🍕",
    rating: "4.3",
    foods: [
      ["Margherita Pizza",180,"🍕"],
      ["Farmhouse Pizza",220,"🍕"],
      ["Garlic Bread",100,"🥖"]
    ]
  },

  burger: {
    name: "Burger Hub",
    type: "Burgers • Fast Food",
    image: "🍔",
    rating: "4.2",
    foods: [
      ["Chicken Burger",150,"🍔"],
      ["Veg Burger",120,"🍔"],
      ["French Fries",80,"🍟"]
    ]
  }

};


let currentRestaurant = "spicy";


function show(id){

  document.querySelectorAll(".page")
    .forEach(x => x.style.display="none");

  document.getElementById(id)
    .style.display="block";

  if(id=="cart" || id=="payment"){
    loadCart();
  }

}


function openRestaurant(name){

  currentRestaurant = name;

  let r = restaurantMenus[name];

  document.getElementById("restaurantName")
    .innerText = r.name;

  document.getElementById("restaurantType")
    .innerText = r.type;

  document.getElementById("restaurantImage")
    .innerText = r.image;

  document.getElementById("restaurantRating")
    .innerText = r.rating;

  let html = "";

  r.foods.forEach(food => {

    html += `
    <div class="item">

      <div class="food small">
        ${food[2]}
      </div>

      <div>
        <h3>${food[0]}</h3>
        <p>Delicious and freshly prepared</p>
        <b>₹${food[1]}</b>
      </div>

      <button
        onclick="add('${food[0]}',${food[1]})">
        +
      </button>

    </div>`;

  });

  document.getElementById("menuList")
    .innerHTML = html;

  show("menu");
}


function add(name,price){

  cart.push({
    name:name,
    price:price
  });

  document.getElementById("count")
    .innerText = cart.length;

  alert(name + " added to cart");
}


function loadCart(){

  let html = "";

  total = 0;


  cart.forEach(food => {

    total += food.price;

    html += `
    <div class="order">

      <div class="food small">
        🍽️
      </div>

      <div>
        <h3>${food.name}</h3>
        <p>₹${food.price}</p>
      </div>

    </div>`;

  });


  document.getElementById("cartList")
    .innerHTML =
    html ||
    "<div class='box'>Your cart is empty.</div>";


  document.getElementById("subtotal")
    .innerText = total;


  document.getElementById("total")
    .innerText = total + 30;


  document.getElementById("pay")
    .innerText = total;


  document.getElementById("paytotal")
    .innerText = total + 30;

}


function paymentChanged(mode){

  document.getElementById("paymentMessage")
    .innerText = mode + " selected";

}


function placeOrder(){

  if(cart.length == 0){

    alert("Please add food first");

    show("menu");

    return;
  }


  cart = [];

  document.getElementById("count")
    .innerText = 0;


  show("success");

}