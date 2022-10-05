import { useParams } from "react-router-dom";
import FormularioCines from "./FormularioCines";

export default function EditarCine(){
    const {id}: any = useParams();
    
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines 
                modelo={{nombre:'Gran RexMichi', latitud:-31.420767, longitud:-64.197314 }} 
                onSubmit={valores => console.log(valores)}
            ></FormularioCines>
        </>
    )
}