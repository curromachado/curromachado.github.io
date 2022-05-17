function insertarGenero() {

    let generos  = {
        id_genero: document.getElementById("GeneroSeleccionado").value,
        genero: document.getElementById("NombreSeleccionado").value,
        descripcion: document.getElementById("DescripccionSeleccionado").value,
        imagen: document.getElementById("ImagenSeleccionado").value
    };

    const dataForInsert = {
        operation: "insert",
        table: "generos",
        object: generos
    };

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarGeneroTerminado);
}

function insertarGeneroTerminado(response) {
    window.alert("Insertado con exito");
}


