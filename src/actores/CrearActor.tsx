import { Link } from "react-router-dom";
import FormularioActores from "./FormularioActores";

export default function CrearActor(){
    return(
        <>
            <h3>Crear Actores</h3>
            <FormularioActores 
                modelo={{nombre:'', fechaNacimiento: undefined}}
                onSubmit={async (valores) => {await new Promise(r => setTimeout(r,3000)) 
                    console.log(valores)}}/>
        </>
    )
}