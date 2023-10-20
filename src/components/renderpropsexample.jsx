//RENDER PROPS EXAMPLE donde uso render prop filter y render prop tasklist:
import Filter from "../renderprops/filter";
import Tasklist from "../renderprops/tasklist";

function Container(){
    //declaramos la lista de tareas
    const tasks=[
        {id:1,tittle:"Task 1", completed:true},
        {id:2,tittle:"Task 2", completed:false},
        {id:3,tittle:"Task 3", completed:true},
        {id:4,tittle:"Task 4", completed:false},
        {id:5,tittle:"Task 5", completed:true},
        {id:6,tittle:"Task 6", completed:true},
        {id:7,tittle:"Task 7", completed:false},
        {id:8,tittle:"Task 8", completed:true},
        {id:9,tittle:"Task 9", completed:true},
        {id:10,tittle:"Task 10", completed:false},
    ]

    return (
        <div>
            {/* usamos componente filter, que si le pasas un children te devuelve el mismo con propiedades */}
            <Filter>
                {/* el children en este caso es una funcion donde le pasas las propiedades ahderidas con Filter*/}
                {(filter, handleFilterChange)=>{
                    return(
                        <div>
                            <label htmlFor="filter">Filtrar por estado: </label>
                            <select name="filter" id="filter" onChange={handleFilterChange}>
                                <option value="all">Todos</option>
                                <option value="completed">Completados</option>
                                <option value="uncompleted">No completados</option>
                            </select>
                            <Tasklist
                                task={
                                filter === "all"? 
                                tasks 
                                :filter === "completed"? 
                                tasks.filter((task) => task.completed)
                                :tasks.filter((task) => !task.completed)
                                }
                            />

                        </div>
                    )
                }
                }
                
            </Filter>
        </div>
    )


};

export default Container;