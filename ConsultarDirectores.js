function consultarDirectores() {
    //Hago un select en la tabla directores
    const dataForSelect = {
        operation: "select",
        table: "directores"
    };
    //ID de mi tabla
    const idImplementacion = "AKfycbx44iRHZEqsnlhoic9IaiAMUqK7pQ7mS_iWxgYsl4wD87XySw3-fnHLNvWGFxqUnzhvbw";

    GoogleSheetDataBaseOperation(
        idImplementacion,
        dataForSelect,
        consultarInfoDirectoresTerminado);
}

function consultarInfoDirectoresTerminado(response) {
    let divDirectores = document.createElement("div");
    divDirectores.className = "directores";

    for (let i = 0; i < response.values.length; i++) {
        //Creo el div del director
        let divDirector = document.createElement("div");
        divDirector.className = "director";

        //Añado director a Directores
        divDirectores.append(divDirector);

        //Creo el div imagen-director
        let divImagen = document.createElement("div");
        divImagen.className = "imagen-director";

        //Añado la imagen
        let imagen = document.createElement("img");
        imagen.setAttribute("src", "imagen/" + response.values[i].imagen);
        divImagen.append(imagen);

        //Añado imagen-director a director
        divDirector.append(divImagen);

        //Creo el div nombre
        let divNombre = document.createElement("div");
        divNombre.className = "nombre";
        
        //Añado el nombre
        let nombre = document.createElement("h2");
        nombre.innerHTML = response.values[i].NombreDirector +" " + response.values[i].ApellidoDirector;
        divNombre.append(nombre);

        //Añado nombre a director
        divDirector.append(divNombre);

        //Creo el div nacionalidad
        let divNacionalidad = document.createElement("div");
        divNacionalidad.className = "nacionalidad";

        //Añado la nacionalidad
        let nacionalidad = document.createElement("h2");
        nacionalidad.innerHTML = response.values[i].Nacionalidad;
        divNacionalidad.append(nacionalidad);

        //Añado nacionalidad a director
        divDirector.append(divNacionalidad);

        //Creo peliculas de director
        let divPeliculasDirector = document.createElement("div");
        divPeliculasDirector.className = "peliculas-director"

        //Creo el enlace para peliculas director con id personalizado
        let enlace = document.createElement("a");
        enlace.setAttribute("href", "peliculas-director.html?id=" + response.values[i].id_director);
        enlace.innerHTML = "Peliculas de este director";

        //Creo el parrafo donde voy a añadir el enlace
        let parrafoEnlace = document.createElement("p");

        //Añado el parrafo a enlace
        parrafoEnlace.append(enlace);
        //Añado el parrafon enlace al div mas info
        divPeliculasDirector.append(parrafoEnlace);
        //Añado mas info a pelicula
        divDirector.append(divPeliculasDirector);



    }
    //Añado el div principal a la web principal
    document.getElementById("contenedor-principal").append(divDirectores);

}
consultarDirectores();
