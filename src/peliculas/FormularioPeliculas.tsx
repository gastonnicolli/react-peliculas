import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./peliculas.model";
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckbox from "../utils/FormGroupCheckbox";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, { selectorMultipleModel } from "../utils/SelectorMultiple";
import { generoDTO } from "../generos/generos.model";
import { useState } from "react";
import { cineDTO } from "../cines/cines.model";


export default function FormularioPeliculas(props: formularioPeliculasProps){

    const [generosSeleccionados, setGenerosSeleccionados] = useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleccionados));

    const [cinesSeleccionados, setCinesSeleccionados] = useState(mapear(props.cinesSeleccionados));
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(mapear(props.cinesNoSeleccionados));

    function mapear(arreglo: {id: number, nombre: string}[]): selectorMultipleModel[]{
        return arreglo.map(valor => {
                return {llave: valor.id, valor: valor.nombre}
            })
    }

    return(
        <Formik
            initialValues={props.modelo} 
            onSubmit={(valores, acciones) => {
                valores.generosIds = generosSeleccionados.map(valor => valor.llave);
                props.onSubmit(valores, acciones)}} 
            validationSchema={Yup.object({
                titulo: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
           {formikPops => (
                <Form>
                    <FormGroupText label="Título" campo='titulo' />
                    <FormGroupCheckbox campo='enCines' label="En cines"/>
                    <FormGroupText campo='trailer' label="Trailer" />
                    <FormGroupFecha campo='fechaLanzamiento' label="Fecha lanzamiento"/>
                    <FormGroupImagen label="Poster" campo='poster' imagenURL={props.modelo.posterURL}/>
                    <div className="form-group">
                        <label>Géneros</label>
                        <SelectorMultiple
                            seleccionados={generosSeleccionados} 
                            noSeleccionados={generosNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setGenerosNoSeleccionados(generosNoSeleccionados)
                                setGenerosSeleccionados(generosSeleccionados) 
                            }}
                        ></SelectorMultiple>
                    </div>
                    <div className="form-group">
                        <label>Cines</label>
                        <SelectorMultiple
                            seleccionados={cinesSeleccionados} 
                            noSeleccionados={cinesNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setCinesNoSeleccionados(cinesNoSeleccionados)
                                setCinesSeleccionados(cinesSeleccionados) 
                            }}
                        ></SelectorMultiple>
                    </div>
                    <Button disabled={formikPops.isSubmitting} type="submit">Guardar</Button>
                    <Link className="btn btn-secondary"to="/" >Cancelar</Link>
                </Form>
           )} 
        </Formik>
    )
}

interface formularioPeliculasProps{
        modelo: peliculaCreacionDTO;
    onSubmit(valores: peliculaCreacionDTO, acciones: FormikHelpers<peliculaCreacionDTO>): void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
}