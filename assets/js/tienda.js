let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("ramakadata")) || [];

let generateShop =()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
        let { id, name, price,desc,img } = x;
        let search = basket.find((x)=>x.id === id) || [];
        return `
        <div id=product-id-${id} class="item card">
        <img class= card-img-top width="443.75" height="300" src= ${img} alt="">
        <div class="details card-body">
            <h5 class= "card-title text-center fuente-texto" >${name}</h3>
            <h2 class= text-center> Precio: $ ${price} MXN</h2>
            <div class="card-description">
            <p class="card-title text-center fuente-texto card-text"> ${desc} </p>
            <div class="price-quantity">
                <p class="card-text-two text-center py-4 fuente-titulo"><small><button class="islas agregar">Artículo
                            Disponible</button></small></p>
                            </div>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                    <div id= ${id} class="quantity">
                    ${search.item === undefined? 0: search.item}</div>
                    <i onclick=" increment(${id})" class="bi bi-cart-plus"></i>
                    <p class= "color-carrito" >Añadir al carrito</p>
                </div>
            </div>
        </div>
    </div>`
    }).join(""));
};

generateShop();

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

    /* console.log(basket); */
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

    /* console.log(basket); */

    localStorage.setItem("ramakadata", JSON.stringify(basket));

};

let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
    /* console.log(search.item); */
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x, y) => x + y, 0);
};

calculation();

const openModal=document.querySelector(".agregar");
const openModal2=document.querySelector(".agregar2");
const openModal3=document.querySelector(".agregar3");
const openModal4=document.querySelector(".agregar4");
const openModal5=document.querySelector(".agregar5");
const openModal6=document.querySelector(".agregar6");
const modal=document.querySelector(".modal_carrito");
const modalClose=document.querySelector(".cerrar");

openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add('modal_carrito_show')
})


modalClose.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove('modal_carrito_show')
})

openModal2.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add('modal_carrito_show')
})
openModal3.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add('modal_carrito_show')
})
openModal4.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add('modal_carrito_show')
})
openModal5.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add('modal_carrito_show')
})
openModal6.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add('modal_carrito_show')
})
