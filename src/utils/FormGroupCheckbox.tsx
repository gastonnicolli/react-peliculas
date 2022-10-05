import {  Field } from "formik";

export default function FormGroupCheckbox(props: formGroupCheckboxProps){
    return(
        <>
            <div className="form-group form-check">
                
                <Field name={props.campo} className="form-check-input" id={props.campo} type="checkbox"></Field>
                <label htmlFor={props.campo}>{props.label}</label>
            </div>
        </>
    )
}

interface formGroupCheckboxProps{
    campo: string;
    label: string;
}