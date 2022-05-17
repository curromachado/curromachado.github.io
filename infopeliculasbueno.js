const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";


function consultarInfoPelicula() {
    const urlParams = new URLSearchParams(window.location.search);
    const idpelicula= urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "peliculas",
        key: idpelicula
    };

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoPeliculaTerminado);
}
//Id genero global
let idGenero = 0;

function consultarInfoPeliculaTerminado(response) {
    document.getElementById("titulo").innerHTML = response.value.titulo;
    document.getElementById("sinopsis").innerHTML = "Sinopsis: " + response.value.sinopsis;
    document.getElementById("ano").innerHTML ="Año: " + response.value.ano;
    document.getElementById("duraccion").innerHTML ="Duraccion: " + response.value.duraccion;
    //document.getElementById("genero").innerHTML = "Genero: " + response.value.id_genero;
    //document.getElementById("director").innerHTML = "Director: " +  response.value.id_director;
    document.getElementById("imagen").innerHTML =   imagen.setAttribute("src", "imagen/" + response.value.imagen);

    const dataForSelect = {
        operation: "select",
        table: "directores",
        key: response.value.id_director
    };

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarDirectorTerminado);

    idGenero = response.value.id_genero;
}

function consultarDirectorTerminado(response) {
    document.getElementById("director").innerHTML = "Director: " +  response.value.NombreDirector + " " + response.value.ApellidoDirector;

    const dataForSelect = {
        operation: "select",
        table: "generos",
        key: idGenero
    };

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarGeneroTerminado);
}

function consultarGeneroTerminado(response) {
    document.getElementById("genero").innerHTML = "Genero: " + response.value.genero;
}

consultarInfoPelicula(); 


//Probando borrar



