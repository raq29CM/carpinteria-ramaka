 /* Modal de aviso de creación de cuenta */

 const continuar = document.querySelector(".continuar");
 const modalCorreo = document.querySelector(".correo");

 continuar.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCorreo.classList.add("correo--show");
 });
 
 
 /******************************************* API **************************************/

 const $nombre = document.querySelector('#mgNombre');
 const $apellidos = document.querySelector('#mgApellido');
 const $correoElectronico = document.querySelector('#mgCorreoE');
 const $telefono = document.querySelector('#mgTelefono');
 const $contrasena = document.querySelector('#mgContrasena');
 const $confirmacionDeContraseña = document.querySelector('#mgConfirmacion');
 const $form = document.querySelector('#mgForm');
 
 $form.addEventListener('submit', (e) => {
     e.preventDefault();
 
     const nombre1 = $nombre.value;
     const apellidos1 = $apellidos.value;
     const correoE1 = $correoElectronico.value;
     const telefono1 = $telefono.value;
     const contrasena1 = $contrasena.value;
     const confirmacion1 = $confirmacionDeContraseña.value;

     console.log(nombre1);
     console.log(apellidos1);
     console.log(correoE1);
     console.log(telefono1);
     console.log(contrasena1);
     console.log(confirmacion1);
    });