import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPelicula(){

    const generos: generoDTO[] = [{id: 1, nombre:"Accion"},
    {id: 2, nombre:"Drama"},
    {id: 3, nombre:"Comedia"}] 

    const cines: cineDTO[] = [{id: 1, nombre:"Gran Rex"},
    {id: 2, nombre:"Cinerama"},
    {id: 3, nombre:"Hoyt's Cinemas"}] 

    return(
        <>
            <h3>Crear Película</h3>
            <FormularioPeliculas
                cinesNoSeleccionados={cines} 
                cinesSeleccionados={[]}
                generosNoSeleccionados={generos} 
                generosSeleccionados = {[]} 
                modelo={{titulo:'', enCines:false, trailer:''}} 
                onSubmit={valores => console.log(valores)}/>
        </>
    )
}