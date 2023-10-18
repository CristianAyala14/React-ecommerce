//high order component to validate form1
import React from 'react';
import { useState } from "react";

//este HOC tiene como funcionalidad extra, validar un formulario.
 function withFormValidation(WrappedComponent){
    const WithFormValidation = (props)=>{
        const[error, setErrors] = useState({})
        function validateForm(){
            const newErrors = {};
            if(!props.formData.name){
                newErrors.name = "el nombre es requerido";
            }
            if(!props.formData.email){
                newErrors.email = "el email es requerido";
            }
            setErrors(newErrors);
        }

        return (<WrappedComponent {...props} error={error} validateForm={validateForm}/>);
    };
    return WithFormValidation;
};

export default withFormValidation;
