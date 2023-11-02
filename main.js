const array = [];
let op = null;
let indice = null;

function registro() {

    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;
    let tipoDocumento = document.getElementById("tipo_documento").value;
    let numDocumento = document.getElementById("numero_documento").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let fecNacimiento = document.getElementById("fecha_nacimiento").value;

    if (op == true) {
        array[indice].nombre = document.getElementById("nombres").value;
        array[indice].apellido = document.getElementById("apellidos").value;
        array[indice].tipoDocumento = document.getElementById("tipo_documento").value;
        array[indice].numDocumento = document.getElementById("numero_documento").value;
        array[indice].genero = document.querySelector('input[name="genero"]:checked').value;
        array[indice].telefono = document.getElementById("telefono").value;
        array[indice].correo = document.getElementById("correo").value;
        array[indice].fecNacimiento = document.getElementById("fecha_nacimiento").value;

    } else {
        let datos = {
            nombre: nombre,
            apellido: apellido,
            tipoDocumento: tipoDocumento,
            numDocumento: numDocumento,
            genero: genero,
            telefono: telefono,
            correo: correo,
            fecNacimiento: fecNacimiento,
        }
        array.push(datos);
    }
    
    console.log(array);
    swal("Felicidades", "Te has registrado correctamente", "success");
    op = false;
    document.getElementById("tabla").innerHTML = "";
    pintar();
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("tipo_documento").value = "";
    document.getElementById("numero_documento").value = "";
    const generoRadioButtons = document.querySelectorAll('input[name="genero"]');
    generoRadioButtons.forEach((radio) => (radio.checked = false));
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("fecha_nacimiento").value = "";
}

function validacion() {

    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;
    let numDocumento = document.getElementById("numero_documento").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let fecNacimiento = document.getElementById("fecha_nacimiento").value;

    const fechaNacimiento = new Date(fecNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (nombre == "")
        swal("Error", "Por favor, llena el campo de nombre.", "warning");
    else if (apellido == "")
        swal("Error", "Por favor, llena el campo de apellido.", "warning");
    else if (numDocumento == "")
        swal("Error", "Por favor, ingresa tu número de documento.", "warning");
    else if (isNaN(numDocumento))
        swal("Error", "Por favor, ingresa un número de documento válido (solo números).", "warning");
    else if (numDocumento.length < 5 || numDocumento.length > 11)
        swal("Error", "El número de documento debe tener entre 6 y 10 dígitos.", "warning");
    else if (genero == null)
        swal("Error", "Por favor, selecciona un género.", "warning");
    else if (telefono == "")
        swal("Error", "Por favor, ingresa tu número de teléfono.", "warning");
    else if (isNaN(telefono))
        swal("Error", "Por favor, ingresa un número de teléfono válido (solo números).", "warning");
    else if (telefono.length < 6 && telefono.length > 12)
        swal("Error", "El número de teléfono debe tener entre 10 y 11 dígitos.", "warning");
    else if (correo == "")
        swal("Error", "Por favor, ingresa tu dirección de correo electrónico.", "warning");
    else if (!/^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/.test(correo))
        swal("Error", "Por favor, ingresa una dirección de correo electrónico válida.", "warning");
    else if (fecNacimiento == "")
        swal("Error", "Por favor, ingresa tu fecha de nacimiento.", "warning");
    else if (edad < 18)
        swal("Error", " debes tener mas de 17 años para poder registrarte.", "warning");
    else {
        registro()
    }
}



function pintar() {
    let frag = document.createDocumentFragment()

    array.forEach((item, index) => {

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")
        let td9 = document.createElement("td");
        let editar = document.createElement("button")
        let eliminar = document.createElement("button")


        td1.textContent = item.nombre
        td2.textContent = item.apellido
        td3.textContent = item.tipoDocumento;
        td4.textContent = item.numDocumento
        td5.textContent = item.genero
        td6.textContent = item.telefono
        td7.textContent = item.correo
        td8.textContent = item.fecNacimiento
        td9.appendChild(editar)
        td9.appendChild(eliminar)

        editar.textContent = "📝"
        editar.addEventListener("click", () => {
            edita(item, index)
        })
        eliminar.textContent = "❌"
        eliminar.addEventListener("click", () => {
            delet(index);
        })

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)
        tr.appendChild(td9)
        frag.appendChild(tr)
        document.getElementById("tabla").appendChild(frag)

    })
}

function edita(r, i) {
    op = true
    indice = i
    console.log(r);
    document.getElementById("nombres").value = r.nombre
    document.getElementById("apellidos").value = r.apellido
    document.getElementById("tipo_documento").value = r.tipoDocumento
    document.getElementById("numero_documento").value = r.numDocumento
    document.querySelector('input[name="genero"][value="' + r.genero + '"]').checked = true;
    document.getElementById("telefono").value = r.telefono
    document.getElementById("correo").value = r.correo
    document.getElementById("fecha_nacimiento").value = r.fecNacimiento
}

function delet(i) {
    indice = i;
    array.splice(indice, 1);
    document.getElementById("tabla").innerHTML = "";
    pintar();
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("tipo_documento").value = "";
    document.getElementById("numero_documento").value = "";
    const generoRadioButtons = document.querySelectorAll('input[name="genero"]');
    generoRadioButtons.forEach((radio) => (radio.checked = false));
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("fecha_nacimiento").value = "";
}
