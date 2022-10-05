import { Link, useParams } from "react-router-dom";
import FormularioActores from "./FormularioActores";

export default function EditarActor(){
    const {id}: any = useParams();

    return(
        <>
            <h3>EditarActor</h3>
            <FormularioActores 
                modelo={{nombre:'Tom Holland', 
                biografia: `# Titulo de la biografia 
Ha nacido en **Catamarca** en el año 1996.`, 
                fechaNacimiento: new Date('1996-06-28T00:00:00'),
                imagenURL:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OpIXBuX8zTJ9p_b0CU5cRQHaEK%26pid%3DApi%26h%3D160&f=1&ipt=e52f6598905bf29ba07b6fc1ab511a17cc27004e0143429d0501ca213bb9252e&ipo=images'}}
                onSubmit={async (valores) => {await new Promise(r => setTimeout(r,3000)) 
                    console.log(valores)}}/>
        </>
    )
}