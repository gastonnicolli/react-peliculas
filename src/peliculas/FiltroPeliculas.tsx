import { Field, Form, Formik } from "formik";
import { generoDTO } from "../generos/generos.model";
import Button from "../utils/Button";


export default function FiltroPeliculas(){
    const valorInicial: filtrosPeliculasForm = {
         titulo: '',
        generoId:0,
        proximosEstrenos:false,
        enCines:false 
    }

    const generos: generoDTO[]=[
        {id: 1, nombre: "Acción"},
        {id: 2, nombre: "Drama"},
        {id: 3, nombre: "Comedia"},
        {id: 4, nombre: "Terror"}
    ]

    return(
        
        <>
        <h3>Filtro Películas</h3>

        <Formik initialValues={valorInicial} 
            onSubmit={valores => console.log(valores)}
            
               
        >
                

            {(formikPops) => (
                <Form>
                    <div className="form-inline">
                        <div className="form-group mb-2">
                            <label htmlFor="titulo" className="sr-only">Título</label>
                            <input type="text" className="form-control" id="titulo" 
                            placeholder="Título de la película"
                            {...formikPops.getFieldProps('titulo')}/>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="generoId" className="sr-only">Género</label>
                            <select className="form-control" id="genero" {...formikPops.getFieldProps('generoId')}>
                                <option value="0">---Seleccione un género---</option>
                                {generos.map(genero => <option value={genero.id} key={genero.id}>{genero.nombre}</option>)}
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <Field className="form-check-input" id="proximosEstrenos" name="proximosEstrenos" type="checkbox"/>
                            <label htmlFor="proximosEstrenos" className="form-check-label">Próxomos estrenos</label>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <Field className="form-check-input" id="enCines" name="enCines" type="checkbox"/>
                            <label htmlFor="enCines" className="form-check-label">En cartelera</label>
                        </div>
                        <Button className="btn btn-primary mb-2 mx-sm-3 "
                        onClick={() => formikPops.submitForm()}>
                            Filtrar
                        </Button>
                        <Button className="btn btn-danger mb-2"
                        onClick={() => formikPops.setValues(valorInicial)}>
                            Limpiar
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
        </>
    )
}

interface filtrosPeliculasForm{
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean
}