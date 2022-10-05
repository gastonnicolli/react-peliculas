import { Formik, Form, FormikHelpers } from "formik"
import { Link } from "react-router-dom"
import Button from "../utils/Button"
import FormGroupText from "../utils/FormGroupText"
import { generoCreacionDTO } from "./generos.model"
import * as Yup from "yup";

export default function FormularioGeneros(props: formularioGenerosProps){
    return(
        <Formik initialValues={props.modelo} 
            onSubmit={props.onSubmit}

            validationSchema = {Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })} 
        >
            {(formikPops) => (    
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre del Género"/>
                    
                    <Button disabled={formikPops.isSubmitting}
                        type="submit">Guardar</Button>
                    <Link className="btn btn-secondary" to="/generos">Cancelar  </Link>
                </Form>  
            )}
        </Formik>
    )
}

interface formularioGenerosProps{
    modelo: generoCreacionDTO,
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>) : void
}