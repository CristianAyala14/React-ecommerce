//high order component to validate a form
import React from 'react';
import { useState } from "react";


 function withFormValidation(WrappedComponent){
    const WithFormValidation = (props)=>{
        const[error, setErrors] = useState({})
        function validateForm(){
            const newErrors = {};
            if(!props.formData.name){
                newErrors.name = "el nombre es requerido";
            }
            setErrors(newErrors);
        }

        return (<WrappedComponent {...props} error={error} validateForm={validateForm}/>);
    };
    return WithFormValidation;
};

export default withFormValidation;
