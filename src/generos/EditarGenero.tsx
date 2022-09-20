import { Link, useParams } from "react-router-dom";

export default function EditarGenero(){
    const {id}: any = useParams();

    return(
        <>
            <h3>Editar Generos</h3>
            <Link to="/generos">Volver</Link>
        </>
    )
}