import React from 'react';
import '../stylesheets/form.css';

function Form ({formData, error, validateForm, onChange}){
    function handleSubmit(event){
        event.preventDefault();
        validateForm && validateForm(); //forma de validar si existe la funcion, de ser true se ejecutara.
    }
    return ( <form onSubmit={handleSubmit}>
        <div className='form-css'>
            <label className='form-name'>Name: </label>
            <input className='form-input-name' type="text" name="name" value={formData.name} onChange={(e)=>onChange(e)}/>
            {error && error.name && <div>{error.name}</div>}
            <button className='form-submit-btn' type="submit">DONE!</button>
        </div>
    </form>);
};
export default Form;
