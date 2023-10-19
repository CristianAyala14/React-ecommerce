import { useState } from "react";
function useForm(initialstate = {}){
    const [formValues, setFormValues] = useState (initialstate);
    
    const reset= ()=>{
        setFormValues(initialstate);
        console.log("error")
    }

    const handleChange= ({target})=>{
        setFormValues({...formValues, [target.name]: target.value,});
        console.log(formValues)
    }

    return {formValues, handleChange, reset};
    
};

export default useForm;