import { Link, useParams } from "react-router-dom";

export default function EditarPelicula(){
    const {id}: any = useParams();
    
    return(
        <>
            <h3>Editar Película</h3>
            <Link to="/peliculas/filtrar">Volver</Link>
        </>
    )
}