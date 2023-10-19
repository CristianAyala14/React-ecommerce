//form para HOC withcontrolledform (useform)
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
                <input type="name" id="name" name="name" value={formValues.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="lastname">Apellido: </label>
                <input type="lastname" id="lastname" name="lastname" value={formValues.lastname} onChange={handleChange}/>
            </div>
            <div>
                <button type="submit">Anotar</button>
                <button type="button" onClick={reset}>Borrar</button>
            </div>
        </form>
    )
}

export default Form3;
