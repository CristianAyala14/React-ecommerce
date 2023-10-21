//contenedor para ejemplo de como se usa CUSTOOM HOOOK PARA REEMPLAZAR RENDERP PROPS.
import { useEffect, useState } from "react";
import getTasks from "../mocks/RandomList"
import TaskList2 from "../renderprops/tasklist2";
import useFilter from "../Customhooks/usefilter"
import FilterOptions from "../components/filteroptions"

function TaskListContainer(){
    const [tasks, setTasks] = useState([]) //usestate para actualizar las tareas que quiera mandar a este componente
    const {filter, setFilter, applyFilter} = useFilter(); //creo un custom hook que aplique filtro
    //uso useeffect para recibir el pedido de lista de tarea.
    useEffect(()=>{
            getTasks().then((resolve)=>{setTasks(resolve);});
            }
        ,[])

    //una ves que tengo las tareas:

    const afterfilter = applyFilter(tasks); //uso propiedad de mi custom hook para filtrar las tareas obtenidas en usestate tasks.

    //tiro un cargando
    if(!tasks.length){
        return (<h1>Cargando...</h1>)
    } 

    //devuelvo el render :
    return(
        <div>
            <h1>Filtrar tareas: </h1>
            <FilterOptions filter={filter} setFilter={setFilter}/> {/*uso componente para el form de filtrado */}
            <TaskList2 tasks={afterfilter}/>
        </div>
    );
};

export default TaskListContainer;
