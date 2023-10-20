//funcion filtro
import { useState } from "react";
/*funcion que resive un children como parametro*/

function Filter({children}){
    const [filter, setFilter] = useState("all");
    /*funcion que resive el evento como parametro y actualiza el filter con el valur del target*/
    const handleFilterChange =(e)=>{
        setFilter(e.target.value);
    };
    return children(filter, handleFilterChange)

};

export default Filter;