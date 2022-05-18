function consultarInfoPelicula() {

    const urlParams = new URLSearchParams(window.location.search);
    const idPelicula = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "peliculas",
        key: idPelicula
    };

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoPeliculaTerminado);
}

function consultarInfoPeliculaTerminado(response) {
   
    document.getElementById("TituloSeleccionado").value = response.value.titulo;
    document.getElementById("GeneroSeleccionado").value = response.value.id_genero;
    document.getElementById("DirectorSeleccionado").value = response.value.id_director;
    document.getElementById("SinopsisSeleccionado").value = response.value.sinopsis;
    document.getElementById("ImagenSeleccionado").value = response.value.imagen;
    document.getElementById("AnoSeleccionado").value = response.value.ano;
    document.getElementById("DuraccionSeleccionado").value = response.value.duraccion;
    
    
}

function modificarPelicula() {

    const NuevoTitulo = document.getElementById("TituloSeleccionado").value;
    const NuevoGenero = document.getElementById("GeneroSeleccionado").value;
    const NuevoDirector = document.getElementById("DirectorSeleccionado").value;
    const NuevaSinopsis = document.getElementById("SinopsisSeleccionado").value;
    const NuevaImagen = document.getElementById("ImagenSeleccionado").value;
    const NuevoAno = document.getElementById("AnoSeleccionado").value;
    const NuevaDuraccion = document.getElementById("DuraccionSeleccionado").value;

    const urlParams = new URLSearchParams(window.location.search);
    const idPelicula = urlParams.get("id");

    const dataForUpdate = {
        operation: "update",
        table: "peliculas",
        key: idPelicula,
        object: {
            titulo: NuevoTitulo,
            id_genero: NuevoGenero,
            id_director: NuevoDirector,
            sinopsis: NuevaSinopsis,
            imagen: NuevaImagen,
            ano: NuevoAno,
            duraccion: NuevaDuraccion
        }
    };   

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForUpdate,
        updatePeliculaTerminado);

}
function updatePeliculaTerminado() {
    window.alert("Fila Actualizada");
    window.location.replace("principal-prioridad.html")
}


consultarInfoPelicula();