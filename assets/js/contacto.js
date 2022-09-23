const $formLogin = document.querySelector('#formLogin');
const $username = document.querySelector('#validationDefault01');
const $phone = document.querySelector('#validationDefault03');
const $correo = document.querySelector('#validationDefault02');
const $adress = document.querySelector('#validationDefault04');
const $ref = document.querySelector('#validationDefault05');
const $city = document.querySelector('#validationDefault06');
const $estado = document.querySelector('#validationDefault07');
const $cp = document.querySelector('#validationDefault08');
const $coments = document.querySelector('#exampleFormControlTextarea1');


$formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = $username.value;
    const correo = $correo.value;
    const telefono = $phone.value;
    const direccion = $adress.value;
    const referencias = $ref.value;
    const ciudad = $city.value;
    const estado = $estado.value;
    const cp = $cp.value;
    const comentarios = $coments.value;
  

    console.log(nombre);
    console.log(correo);
    
    console.log(telefono);
    console.log(direccion);
    console.log(referencias);

    console.log(ciudad);
    console.log(estado);
    console.log(cp);
    console.log(comentarios);
});