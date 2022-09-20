import { Link, useParams } from "react-router-dom";

export default function EditarActor(){
    const {id}: any = useParams();

    return(
        <>
            <h3>EditarActor</h3>
            <h4>{id}</h4>
            <Link to="/actores">Volver</Link>
        </>
    )
}