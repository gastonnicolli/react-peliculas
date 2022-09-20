import { Link, useParams } from "react-router-dom";

export default function EditarCine(){
    const {id}: any = useParams();
    
    return(
        <>
            <h3>EditarCine</h3>
            <Link to="/cines">Volver</Link>
        </>
    )
}