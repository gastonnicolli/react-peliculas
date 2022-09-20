import { Field } from "formik";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function FormGroupText(props: formGroupTextProps){
    return(
        <>
            <div className="form-group">
                {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
                <Field name={props.campo} className="form-control" 
                placeholder={props.placeholder}></Field>
            </div>
        </>
    )
}

interface formGroupTextProps{
    campo: string;
    label?: string;
    placeholder?: string;
}