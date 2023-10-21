//MOCK (se usa para simular tarea asincrona, en este caso de pedido de datos de tareas)
const tasks = [
    {id:1, text: "compras", completed: false},
    {id:2, text: "estudiar", completed: true},
    {id:3, text: "pasear", completed: true},
    {id:4, text: "comer", completed: false},
    {id:5, text: "limpiar", completed: true},
]
function getTasks(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(tasks)
        }, 3000)
    })
}

export default getTasks;