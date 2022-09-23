let label = document.getElementById('label')
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("ramakadata")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if(basket.length !==0){
    return (ShoppingCart.innerHTML = basket.map((x) => {
      let { id, item } = x;
      let search = shopItemsData.find((y) => y.id === id) || [];
      let { img, name, price} = search;
      return `
   <div class="col-sm-6 mb-3 justify-content-center">
    <div class="card" style="background-color: #b9a38a; width: auto;">
      <div class="card-body">
      <h5 class="card-title"><button onclick="removeItem(${id})" class="btn btn-danger btn-sm disabled " type="button"><i class="bi bi-trash3"></i></button>&nbsp;${name}</h5>
      <div class= "text-center mt-3"><img src="${img}" class="img-set img-fluid" style="width: 250px; height: 200px; alt="articulo"></div>
        <p class="text-center m-3">Precio Unitario: $${price} MXN</p>
        <p class="text-center m-3">Cantidad:</p>
        <p class="text-center m-3"></p>
        <div class="input-group w-auto justify-content-around m-3">
        <i onclick="decrement(${id})" class="bi bi-dash-square"></i>
        <div id= ${id} class="quantity">${item}</div>
      <i onclick=" increment(${id})" class="bi bi-plus-square"></i></div>
      <h6 class="text-right text-center m-4">Total: $${item * search.price} MXN</h6>
      </div>
    </div>
  </div>
  
      `;
    }).join(''));
  }
  else{
    ShoppingCart.innerHTML =  ``
    label.innerHTML = `
    <h2> El Carrito esta vacío </h2>
    <a href="tienda.html"</a>
      <button class="HomeBtn btn-lg">Volver a tienda</button>
      </a>
    `;
  }

};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);
  
  if(search === undefined){
  basket.push({
      id: selectedItem.id,
      item: 1,
  });
  }
  else{
      search.item += 1;
  }

  generateCartItems();

  update(selectedItem.id);

  localStorage.setItem("ramakadata", JSON.stringify(basket));

};


let decrement = (id)=>{
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);

  if(search === undefined) return
  else if(search.item === 0) return;

  if (search.item === 0) return;
  
  else{
      search.item -= 1;
  }
  
  update(selectedItem.id);
  basket = basket.filter((x)=> x.item !== 0);

  generateCartItems();

  localStorage.setItem("ramakadata", JSON.stringify(basket));

};

let update = (id)=>{
  let search = basket.find((x)=> x.id === id);
  /* console.log(search.item); */
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id)=>{
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x)=> x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  calculation();
  localStorage.setItem("ramakadata", JSON.stringify(basket));

}

let clearCart = ()=>{
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem("ramakadata", JSON.stringify(basket));

}


let TotalAmount = ()=>{ 
  if(basket.length !==0){
    let amount = basket.map((x) => {
      let { item, id } = x;
      let search = shopItemsData.find((y) => y.id === id) || [];

      return item * search.price;
  }).reduce((x,y) => x+y,0);
  // console.log(amount);
  label.innerHTML = ` <h2>Total: $${amount} MXN</h2>
  <button onclick="clearCart();" class="btn btn-info btn-lg disabled btn-default removeAll">Limpiar carrito</button>
  <button onclick="location.href = 'carrito2.html';" class="btn btn-success btn-lg btn-default checkout">Comprar</button>
  <h3 class="text-center">Artículos agregados:</h3>


  `;
} else return;
};

TotalAmount();