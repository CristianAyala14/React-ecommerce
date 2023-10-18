//ejemplo de formulario que tiene las propiedades dentro. para FORM3 utilizo custom hoocks, dnde agrego dinamismo a estas propiedades para asi ser usadas con mas forms.
import { useState } from "react";

function Form2(){
    const [formValues, setFormValues] = useState({email:"",password:""});

    const handleChange = (e)=>{
        setFormValues({...formValues, [e.target.name]: e.target.value});
    };

    const reset =()=>{
        setFormValues({email:"",password:""})
    };
    //funcion que se ejecuta al hacer click en enviar
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    //onsubmit esta conectado con "Type submit"
    return(
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={formValues.password} onChange={handleChange}/>
            </div>
            <button type="submit">Iniciar sesión</button>
            <button type="button" onClick={reset}>Intentar nuevamente.</button>
        </form>
    )

}

export default Form2;
