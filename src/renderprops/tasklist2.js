//render pro tasklist2 
function TaskList2({tasks}){
    return(
        <div>
            <h1>Lista de tareas: </h1>
            <ul>
                {tasks.map((task)=>
                    (<li key={task.id}>
                        {task.text}-{task.completed? "Completada" : "Pendiente"}
                    </li>)
                )}
            </ul>
        </div>
    );
};

export default TaskList2;
