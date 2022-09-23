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
