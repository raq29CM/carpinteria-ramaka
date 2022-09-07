/************************ Modals de recuperación de contraseña *********************/

const linkrecordar = document.querySelector(".linkrecordar");
const modalRecuperar = document.querySelector(".recuperar");
const continuar = document.querySelector(".continuar");
const modalCorreo = document.querySelector(".correo");
const entendido = document.querySelector(".entendido");

linkrecordar.addEventListener('click', (e)=>{
    e.preventDefault();
    modalRecuperar.classList.add("recuperar--show");
});

continuar.addEventListener('click', (e)=>{
    e.preventDefault();
    modalRecuperar.classList.remove("recuperar--show");
    modalCorreo.classList.add("correo--show");
});

entendido.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCorreo.classList.remove("correo--show");
});

/****************************** Modals de creación de cuenta **************************/

const crearCuenta = document.querySelector(".crearCuenta");
const modalCrearCuenta = document.querySelector(".crearCuenta");
const btnCrearCuenta = document.querySelector(".btnCrearCuenta");
const btnCrearCuenta2 = document.querySelector(".btnCrearCuenta2");

btnCrearCuenta.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCrearCuenta.classList.add("crearCuenta--show");
});

btnCrearCuenta2.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCrearCuenta.classList.remove("crearCuenta--show")
})



