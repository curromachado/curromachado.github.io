const urlParams = new URLSearchParams(window.location.search);
const key= urlParams.get("id");

function BorrarPelicula() {

    let idGoogleSheet = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";
    let tableName     = "peliculas";
    
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

function BorrarPeliculaTerminado(response) {
    window.alert("Se ha borrado "+key);
    
}
