import React from 'react';
import '../stylesheets/form.css';

function Form1 ({formData, error, validateForm, onChange}){
    function handleSubmit(event){
        event.preventDefault();
        validateForm && validateForm(); //forma de validar si existe la funcion, de ser true se ejecutara.
    }
    return ( <form onSubmit={handleSubmit}>
        <div className='form-css'>
            <div>
                <label className='form-name'>Name: </label>
                <input className='form-input-name' type="text" name="name" value={formData.name} onChange={(e)=>onChange(e)}/>
            </div>
            <div>
                <label className='form-name'>E-mail: </label>
                <input className='form-input-name' type="text" name="email" value={formData.email} onChange={(e)=>onChange(e)}/>
            </div>
            <div>
                <button className='form-submit-btn' type="submit">DONE!</button>    
            </div>
            {error && error.name && <div>{error.name}</div>}
            {error && error.email && <div>{error.email}</div>}

        </div>
    </form>);
};
export default Form1;
