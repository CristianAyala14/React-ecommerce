//funcion que resive una lista como props y las pinta.
function TaskList({task}){
    return(
        <div>
            <h1>Task list</h1>
            <ul>
                {task.map((task)=>(<li key={task.id}>{task.tittle}</li>))}
            </ul>
        </div>
    );
};

export default TaskList;