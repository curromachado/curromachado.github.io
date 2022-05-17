function consultarGeneros() {
    //Hago un select en la tabla generos
    const dataForSelect = {
        operation: "select",
        table: "generos"
    };
    //ID de mi tabla
    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoGenerosTerminado);
}

function consultarInfoGenerosTerminado(response) {
    let divGeneros = document.createElement("div");
    divGeneros.className = "generos";

    for (let i = 0; i < response.values.length; i++) {
        //Creo el div del genero
        let divGenero = document.createElement("div");
        divGenero.className = "genero";

        //Añado genero a generos
        divGeneros.append(divGenero);

        //Creo el div imagen-genero
        let divImagen = document.createElement("div");
        divImagen.className = "imagen-genero";

        //Añado la imagen
        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imagen/" + response.values[i].imagen);
        divImagen.append(imagen);

        //Añado imagen-genero a genero
        divGenero.append(divImagen);

        //Creo el div nombre genero
        let divNombre = document.createElement("div");
        divNombre.className = "nombre";
        
        //Añado el nombre
        let nombre = document.createElement("h2");
        nombre.innerHTML = response.values[i].genero;
        divNombre.append(nombre);

        //Añado nombre a genero
        divGenero.append(divNombre);

        //Creo el div descripccion
        let divDescripcion = document.createElement("div");
        divDescripcion.className = "descripcion";

        //Añado la descripcion
        let descripcion = document.createElement("h2");
        descripcion.innerHTML = response.values[i].descripcion;
        divDescripcion.append(descripcion);

        //Añado descripcion a genero
        divGenero.append(divDescripcion);

        //Creo peliculas de generos
        let divPeliculasGeneros = document.createElement("div");
        divPeliculasGeneros.className = "peliculas-generos"

        //Creo el enlace para peliculas generos con id personalizado
        let enlace = document.createElement("a");
        enlace.setAttribute("href", "peliculas-generos.html?id=" + response.values[i].id_genero);
        enlace.innerHTML = "Peliculas de este genero";

        //Creo el parrafo donde voy a añadir el enlace
        let parrafoEnlace = document.createElement("p");

        //Añado el parrafo a enlace
        parrafoEnlace.append(enlace);
        //Añado el parrafon enlace al div generos
        divPeliculasGeneros.append(parrafoEnlace);
        //Añado generos a genero
        divGenero.append(divPeliculasGeneros);



    }
    //Añado el div principal a la web principal
    document.getElementById("contenedor-principal").append(divGeneros);

}
consultarGeneros();