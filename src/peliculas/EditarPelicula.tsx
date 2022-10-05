import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPelicula(){

    const generosSeleccionados: generoDTO[] = [{id: 1, nombre:"Accion"},
    {id: 3, nombre:"Comedia"}];

    const generosNoSeleccionados: generoDTO[] = [{id: 2, nombre:"Drama"}] 

    const cinesSeleccionados: cineDTO[] = [{id: 2, nombre:"Cinerama"},
    {id: 3, nombre:"Hoyt's Cinemas"}] 

    const cinesNoSeleccionados: cineDTO[] = [{id: 1, nombre:"Gran Rex"}]
    
    return(
        <>
            <h3>Editar Película</h3>
            <FormularioPeliculas
                cinesNoSeleccionados={cinesNoSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados} 
                generosSeleccionados= {generosSeleccionados}
                modelo={{titulo:'Proyecto Blerwitch', 
                    enCines:true, 
                    trailer:'Una bruja que se los comio a todos en un bosque', 
                    fechaLanzamiento: new Date('2018-06-18T00:00:00')}} 
                onSubmit={valores => console.log(valores)}/>
        </>
    )
}