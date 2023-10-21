import { useState } from "react";

function useFilter(initialstate="all"){
    const[filter, setFilter]=useState(initialstate)
    function applyFilter(tasks){
        if(filter==="all"){
            return tasks;
        }else if(filter==="completed"){
            return tasks.filter((task)=>task.completed)
        }else if(filter === "pending"){
            return tasks.filter((task)=>!task.completed)
        }
    };
    return {filter, setFilter, applyFilter};
} 

export default useFilter;