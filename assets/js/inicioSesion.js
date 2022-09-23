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

/*********************************************** API ***********************************/

const $formLogin = document.querySelector('#cyzform');
 const $username = document.querySelector('#cyzinicio');
 const $password = document.querySelector('#cyzcontra');
 
 $formLogin.addEventListener('submit', (e) => {
     e.preventDefault();
 
     const correoelectronico = $username.value;
     const contraseña = $password.value;
 
     console.log(correoelectronico);
            console.log(contraseña);
/*  
     if(username != '' && password != '') {
         fetch('http://localhost:8080/login', {
             method: 'POST',
             body: JSON.stringify( {
                 nombre,
                 password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })} else {
                localStorage.removeItem('token');
                Swal.fire({
                    title: 'Correo electronico o contraseña incorrecta',
                    text: 'Reintentar',
                    icon: 'error',
                    confirmButtonText: 'ok'
                });
                //emailError.textContent = 'Usuario o contraseña incorrecta';
            } */
        });