function insertarDirector() {

    let directores  = {
        id_director: document.getElementById("DirectorSeleccionado").value,
        NombreDirector: document.getElementById("NombreSeleccionado").value,
        ApellidoDirector: document.getElementById("ApellidoSeleccionado").value,
        Nacionalidad: document.getElementById("NacionalidadSeleccionado").value,
        imagen: document.getElementById("ImagenSeleccionado").value
    };

    const dataForInsert = {
        operation: "insert",
        table: "directores",
        object: directores
    };

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarDirectorTerminado);
}

function insertarDirectorTerminado(response) {
    window.alert("Insertado con exito");
}


