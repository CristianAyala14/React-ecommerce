//form para HOC withcontrolledform (useform)
import useForm from "../Customhooks/useform";

function Form4(){
    //uso el custom hook use form
    const {formValues, handleChange, reset} = useForm({product:"", amount:""})

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues);  
    };

    return(
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="product">Producto: </label>
                <input type="text" id="product" name="product" value={formValues.product} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="amount">Cantidad: </label>
                <input type="amount" id="amount" name="amount" value={formValues.amount} onChange={handleChange}/>
            </div>
            <div>
                <button type="submit">Cargar</button>
                <button type="button" onClick={reset}>Eliminar</button>
            </div>
        </form>
    )
}

export default Form4;
