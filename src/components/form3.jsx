//form para HOC withcontrolledform
import { useState } from "react";

function Form3({formProps}){
    const {formValues, handleChange, reset} = formProps;

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues);  
    };

    return(
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="name">Nombre: </label>
                <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="name">Apellido: </label>
                <input type="text" id="lastname" name="lastname" value={formValues.lastname} onChange={handleChange}/>
            </div>
        </form>
    )
}

export default Form3;
