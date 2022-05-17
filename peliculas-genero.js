function consultarGeneros() {
    const urlParams = new URLSearchParams(window.location.search);
    const idGenero = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "generos",
        key: idGenero
    };

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarGenerosTerminado);

}

function consultarGenerosTerminado(response)  {

    document.getElementById("genero").innerHTML = response.value.genero;

    const dataForSelect = {
        operation: "select",
        table: "peliculas"
    };

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarPeliculasGenerosTerminado);
}

function consultarPeliculasGenerosTerminado(response) {

    const urlParams = new URLSearchParams(window.location.search);
    const idGenero = urlParams.get("id");
            //Creo el div Peliculas genero
            let divPeliculasGenero = document.createElement("div");
            divPeliculasGenero.className = "generos";
    for (let i = 0; i < response.values.length; i++) {
            
        if (idGenero == response.values[i].id_genero) {
            

            //creo el div genero
            let divgenero = document.createElement("div");
            divgenero.className="genero";

            //lo añado a peliculas genero
            divPeliculasGenero.append(divgenero);

            //Creo el div titulo
            let divtitulo = document.createElement("div");
            divtitulo.className = "titulo";

            //Creo el parrafo que contiene el titulo
            let parrafoTitulo = document.createElement("h2");
            parrafoTitulo.innerHTML = response.values[i].titulo;
            divgenero.append(parrafoTitulo);
            //Lo añado a div titulo
            divtitulo.append(parrafoTitulo);
            //lo añado a pelicula
            divgenero.append(divtitulo);

            //Creo el div de la imagen
            let divImagen = document.createElement("div");
            divImagen.className = "imagen";
            //Añado la imagen
            let imagenGenero = document.createElement("img");
            imagenGenero.setAttribute("src", "imagen/"+ response.values[i].imagen);
            //lo añado a div imagen
            divImagen.append(imagenGenero);
            //lo añado a pelicula
            divgenero.append(divImagen);

            document.getElementById("contenedor-principal").append(divPeliculasGenero);
        }
    }
}


consultarGeneros();