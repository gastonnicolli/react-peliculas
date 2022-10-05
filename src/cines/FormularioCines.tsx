import { Form, Formik, FormikHelpers } from "formik";
import { cineCreacionDTO } from "./cines.model";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import MapaFormulario from "../utils/MapaFormulario";
import { coordenadaDto } from "../utils/coordenadas.model";


export default function FormularioCines(props:formularioCinesProps){

    function trasformarCoordenadas(): coordenadaDto[] | undefined {
        if(props.modelo.latitud && props.modelo.longitud){
            const repuesta: coordenadaDto = {lat: props.modelo.latitud, lng: props.modelo.longitud};
            return [repuesta];
        }

        return undefined;
    }


    return(
        <Formik
            initialValues={props.modelo} 
            onSubmit={props.onSubmit}
            validationSchema = {Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps)=> (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre"></FormGroupText>
                    <div style={{marginBottom:'1rem'}}>
                        <MapaFormulario campoLat="latitud" campoLng="longitud" 
                            coordenadas={trasformarCoordenadas()}
                        />
                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                    <Link className="btn btn-secondary" to="/cines" >Cancelar  </Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioCinesProps{
    modelo: cineCreacionDTO;
    onSubmit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void;
}


