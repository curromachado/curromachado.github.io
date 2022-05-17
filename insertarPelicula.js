function insertarPelicula() {

    let pelicula = {
        id_pelicula: document.getElementById("IdSeleccionado").value,
        titulo: document.getElementById("TituloSeleccionado").value,
        id_genero: document.getElementById("GeneroSeleccionado").value,
        id_director: document.getElementById("DirectorSeleccionado").value,
        sinopsis: document.getElementById("SinopsisSeleccionado").value,
        imagen: document.getElementById("ImagenSeleccionado").value,
        ano: document.getElementById("AnoSeleccionado").value,
        duraccion: document.getElementById("DuraccionSeleccionado").value
    };

    const dataForInsert = {
        operation: "insert",
        table: "peliculas",
        object: pelicula
    };

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForInsert,
        insertarPeliculaTerminado);
}

function insertarPeliculaTerminado(response) {
    window.alert("Insertada con exito");
}


