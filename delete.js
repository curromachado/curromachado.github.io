
function BorrarPelicula() {

    let idGoogleSheet = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";
    let tableName     = "peliculas";
    let key = document.getElementById("id").value;
    const dataForSelect = {
        operation: "delete",
        table: tableName,
        key: key
    };

    GoogleSheetDataBaseOperation(
        idGoogleSheet,
        dataForSelect,
        BorrarPeliculaTerminado);
}

function BorrarPeliculaTerminado() {
    window.alert("Se ha borrado")
    window.location.replace("prioridad.html")
}
