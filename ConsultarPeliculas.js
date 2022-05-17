function consultarPeliculas() {
    //Hago un select en la tabla peliculas
    const dataForSelect = {
        operation: "select",
        table: "peliculas"
    };
    //ID de mi tabla
    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDePeliculasTerminado);
}

function consultarInfoDePeliculasTerminado(response) {
    let divPeliculas = document.createElement("div");
    divPeliculas.className = "peliculas";

    for (let i = 0; i < response.values.length; i++) {
        //Creo el div de la pelicula
        let divPelicula = document.createElement("div");
        divPelicula.className = "pelicula";

        //Añado pelicula a peliculas
        divPeliculas.append(divPelicula);

        //Creo el div imagen-pelicula
        let divImagen = document.createElement("div");
        divImagen.className = "imagen-pelicula";

        //Añado la imagen
        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imagen/" + response.values[i].imagen);
        divImagen.append(imagen);

        //Añado imagen-pelicula a pelicula
        divPelicula.append(divImagen);

        //Creo el div descripcion-pelicula
        let divDescripcion = document.createElement("div");
        divDescripcion.className = "descripcion-pelicula";

        //Añado descripcion pelicula a pelicula
        divPelicula.append(divDescripcion);

        //Creo el div Año
        let divAno = document.createElement("div");
        divAno.className = "año-pelicula";

        //Relleno el div año
        let ano = document.createElement("h3");
        ano.innerHTML = "Año: " + response.values[i].ano;
        divAno.append(ano);

        //Añado año a descripcion
        divDescripcion.append(divAno);

        //Creo el div Duraccion
        let divDuraccion = document.createElement("div");
        divDuraccion.className = "duraccion-pelicula";

        //Relleno duraccion
        let duraccion = document.createElement("h3");
        duraccion.innerHTML = "Duraccion: " + response.values[i].duraccion;
        divDuraccion.append(duraccion);

        //Añado duraccion a descripcion
        divDescripcion.append(divDuraccion);

        //Creo el div titulo-pelicula
        let divTituloPelicula = document.createElement("div");
        divTituloPelicula.className = "titulo-pelicula";

        //Creo el titulo para las peliculas
        let titulo = document.createElement("h1");
        titulo.innerHTML = response.values[i].titulo;
        divTituloPelicula.append(titulo);

        //Añado titulo pelicula a pelicula
        divPelicula.append(divTituloPelicula);

        //Creo mas informaccion  para web usuario
        let divMasInfo = document.createElement("div");
        divMasInfo.className = "mas-informacion"

        //Creo el enlace para mas inforamcion con id personalizado
        let enlace = document.createElement("a");
        enlace.setAttribute("href", "info-peliculas.html?id=" + response.values[i].id_pelicula);
        enlace.innerHTML = "Más información";

        //Creo el parrafo donde voy a añadir el enlace
        let parrafoEnlace = document.createElement("p");

        //Añado el parrafo a enlace
        parrafoEnlace.append(enlace);
        //Añado el parrafon enlace al div mas info
        divMasInfo.append(parrafoEnlace);
        //Añado mas info a pelicula
        divPelicula.append(divMasInfo);




    }
    //Añado el div principal a la web principal
    document.getElementById("contenedor-principal").append(divPeliculas);

}
consultarPeliculas();