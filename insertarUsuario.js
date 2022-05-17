function insertarUsuario() {

    let usuarios = {
        usuario: document.getElementById("usuario").value,
        contrasena: document.getElementById("clave").value,
        tipo: document.getElementById("tipo").value
    };

    
    

    const dataForInsert = {
        operation: "insert",
        table: "login",
        object: usuarios
    };

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarUsuarioTerminado);
}

function insertarUsuarioTerminado(response) {
    console.log(response);
}

function alerta() {
    window.alert("Usuario Registrado con exito");
}


insertarUsuario();