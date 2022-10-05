import { ErrorMessage, useFormikContext } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";


export default function FormGroupFecha(props: formGroupFechaProps){
    const {values, validateForm, touched, errors}=useFormikContext<any>();
    return(
        <>
            <div className="form-group">
                {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
                <input className="form-control" type="Date" placeholder={props.placeholder}
                    name={props.campo} id={props.campo}
                    defaultValue={values[props.campo]?.toLocaleDateString('en-CA')}
                    onChange={e => {
                        const fecha = new Date(e.currentTarget.value + 'T00:00:00');
                        values[props.campo] = fecha;
                        validateForm();
                    }}
                ></input>
                {touched[props.campo] && errors[props.campo] ? 
                    <MostrarErrorCampo mensaje={errors[props.campo]?.toString()!} /> : null}
            </div>
        </>
    )
}

interface formGroupFechaProps{
    campo: string;
    label?: string;
    placeholder?: string;
}