import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./Actores.model";
import * as Yup from 'yup';
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import FormGroupMarkDown from "../utils/FormGroupMarkDown";

export default function FormularioActores(props:formularioActoresProps){
    return (
        <>
            <Formik 
                initialValues={props.modelo}
                onSubmit={props.onSubmit} 
                validationSchema={Yup.object({
                    nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
                })}
                >
                {(formikPops)=>(
                    <Form>
                        <FormGroupText campo="nombre" label="Nombre"/>
                        <FormGroupFecha campo="fechaNacimiento" label="Fecha Nacimiento"/>
                        <FormGroupImagen campo="foto" label="Foto" imagenURL={props.modelo.imagenURL}/>
                        <FormGroupMarkDown campo="biografia" label="Biografia" />

                        <Button disabled={formikPops.isSubmitting} type="submit">Guardar</Button>
                        <Link className="btn btn-secondary"to="/actores">Cancelar</Link>
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface formularioActoresProps{
    modelo:actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void
}