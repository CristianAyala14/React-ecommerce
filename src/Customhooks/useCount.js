import { useState } from "react";

export const useCount = (initial = 0, min, max) =>{
    if(initial < min || initial > max){initial = min}
    const [counter, setcounter] = useState(initial) 
    const decrement = ()=>{
        if(counter > min){setcounter((counter)=> counter -1)}
    }
    const increment = ()=>{
        if(counter < max){setcounter((counter) => counter +1)}
    }
    const reset = ()=>{
        setcounter(initial)
    }
    return {counter, decrement, increment, reset}
}