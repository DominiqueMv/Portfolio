let nombre = document.getElementById("name");
let apellido = document.getElementById("lastName");
let email = document.getElementById("email");
let telefono = document.getElementById("number");
let mensaje = document.getElementById("message");

let send = document.getElementById("send");

//flags
var alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
var alertValidaciones = document.getElementById("alertValidaciones");


// validaciones --------------------------------------------------------------------- 
const validarNombre = (nombre) => {
    const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    return expresionRegular.test(nombre);
};
const validarApellido = (apellido) => {
    const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    return expresionRegular.test(apellido);
};
const validarEmail = (email) => {
    const expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
    return expresionRegular.test(email);
};

const validarTelefono = (telefono) => {
    const expresionRegular =/^(?!.*(\d)\1{4,})\d{10}$/;
    return expresionRegular.test(telefono);
};

const validarMensaje = (mensaje) => {
    const expresionRegular = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    return expresionRegular.test(mensaje);
};

send.addEventListener('click', (e) => {
    e.preventDefault();
    let flagNombre = true;
    let flagApellido = true;
    let flagEmail = true;
    let flagTelefono = true;
    let flagMensaje = true;

    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    nombre.style.border = "";
    apellido.style.border = "";
    telefono.style.border = "";
    email.style.border = "";
    mensaje.style.border = "";

    nombre.value = nombre.value.trim();
    telefono.value = telefono.value.trim();
    email.value = email.value.trim();
    apellido.value = apellido.value.trim();
    mensaje.value = mensaje.value.trim();

    // Validación del nombre
    if (!validarNombre(nombre.value) || nombre.value.length < 3 || nombre.value.length > 15) {
        flagNombre = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>El nombre ingresado no es válido.</strong><br/>`);
        nombre.style.border = "solid 2px red";
    }

    // Validación del apellido
    if (!validarApellido(apellido.value) || apellido.value.length < 3 || apellido.value.length > 15) {
        flagApellido = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>Tú apellido ingresado no es válido.</strong><br/>`);
        apellido.style.border = "solid 2px red";
    }


    if (!validarEmail(email.value)) {
        flagEmail = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>Tú email ingresado no es válido.</strong><br/>`);
        email.style.border = "solid 2px red";
    }//email

    if (!validarTelefono(telefono.value)) {
        flagTelefono = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>Tú número ingresado no es válido.</strong><br/>`);
        telefono.style.border = "solid 2px red";
    }//telefono

    if (!validarMensaje(mensaje.value)) {
        flagMensaje = false;
        alertValidacionesTexto.insertAdjacentHTML("afterbegin", `<strong>Tú mensaje ingresado no es válido.</strong><br/>`);
        mensaje.style.border = "solid 2px red";
    }//mensaje

    if (flagNombre && flagApellido && flagEmail && flagTelefono && flagMensaje) {
        const serviceID = 'service_uo7v31i';
        const templateID = 'template_ocbktzr';
        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                alert("Mensaje Enviado!")
            }, (err) => {
                alert(JSON.stringify(err));
            });
    } else {
        alertValidaciones.style.display = "block";
    }
});  