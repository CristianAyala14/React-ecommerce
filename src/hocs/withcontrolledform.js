
//high order component dinamico que en ves de poner las funcionalidades dentro del form como en form2 "handleChange", "setFormValues", "handleSubmit"
//las puedo utilizar en cualquier form. (las uso en form3 y form4)

import { useState } from "react";

function withControlledForm(FormComponent, initialState){
    //componente que devolvera el componente que se ingreso como parametro, con logica adherida(*1).
    const WrappedComponent=()=>{
        const [formValues, setFormValues] = useState (initialState);
        
        const handleChange=(e)=>{
            setFormValues({
                ...formValues, [e.target.name]: e.target.value,
            });
        }

        const reset =()=>{
            setFormValues(initialState)
        };

        const formProps = {
            formValues, handleChange, reset,
        };
        return <FormComponent formProps={formProps}/> //(*1.a)
    };
    //y aca retornamos el componente nuevo.(*1.b)
    return WrappedComponent;
}; 

export default withControlledForm;