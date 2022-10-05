import { Link, useParams } from "react-router-dom";
import FormularioGeneros from "./FormularioGeneros";

export default function EditarGenero(){
    const {id}: any = useParams();

    return(
        <>
            <h3>Editar Generos</h3>

            <FormularioGeneros modelo={{nombre:'Acción'}} 
                onSubmit={async (valores) => {await new Promise(r => setTimeout(r,3000)) 
                console.log(valores)}}/>

            <Link to="/generos">Volver</Link>
        </>
    )
}