const openModal=document.querySelector(".agregar");
const modal=document.querySelector(".modal");
const modalClose=document.querySelector(".modal_close");

openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add('modal_show')
})


modalClose.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove('modal_show')
})