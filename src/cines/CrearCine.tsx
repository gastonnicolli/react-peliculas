import { Link } from "react-router-dom";
import FormularioCines from "./FormularioCines";

export default function CrearCine(){
    return(
        <>
            <h3>Crear Cine</h3>
            <FormularioCines 
                modelo={{nombre:''}} 
                onSubmit={valores => console.log(valores)}
            ></FormularioCines>
        </>
    )
}