function consultarDirectores() {
    const urlParams = new URLSearchParams(window.location.search);
    const idDirector = urlParams.get("id");

    const dataForSelect = {
        operation: "select",
        table: "directores",
        key: idDirector
    };

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarDirectoresTerminado);

}

function consultarDirectoresTerminado(response)  {

    document.getElementById("director").innerHTML = response.value.NombreDirector +" "+ response.value.ApellidoDirector ;

    const dataForSelect = {
        operation: "select",
        table: "peliculas"
    };

    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarPeliculasDirectorTerminado);
}

function consultarPeliculasDirectorTerminado(response) {

    const urlParams = new URLSearchParams(window.location.search);
    const idDirector = urlParams.get("id");
            //Creo el div Peliculas director
            let divPeliculasDirector = document.createElement("div");
            divPeliculasDirector.className = "peliculas";
    for (let i = 0; i < response.values.length; i++) {
            
        if (idDirector == response.values[i].id_director) {
            

            //creo el div pelicula
            let divpelicula = document.createElement("div");
            divpelicula.className="pelicula";

            //lo añado a peliculas director
            divPeliculasDirector.append(divpelicula);

            //Creo el div titulo
            let divtitulo = document.createElement("div");
            divtitulo.className = "titulo";

            //Creo el parrafo que contiene el titulo
            let parrafoTitulo = document.createElement("h2");
            parrafoTitulo.innerHTML = response.values[i].titulo;
            divpelicula.append(parrafoTitulo);
            //Lo añado a div titulo
            divtitulo.append(parrafoTitulo);
            //lo añado a pelicula
            divpelicula.append(divtitulo);

            //Creo el div de la imagen
            let divImagen = document.createElement("div");
            divImagen.className = "imagen";
            //Añado la imagen
            let imagenPelicula = document.createElement("img");
            imagenPelicula.setAttribute("src", "imagen/"+ response.values[i].imagen);
            //lo añado a div imagen
            divImagen.append(imagenPelicula);
            //lo añado a pelicula
            divpelicula.append(divImagen);

            document.getElementById("contenedor-principal").append(divPeliculasDirector);
        }
    }
}


consultarDirectores();