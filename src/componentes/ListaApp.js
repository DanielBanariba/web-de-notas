import { useState } from "react";
import Todo from "./Todo";
import "./danielbarrientos.css"

export default function ListaApp(){

const [title, setTitle]= useState("");
const [tarea, setTarea]= useState([]);

function handleInputChange(e){
    setTitle(e.target.value);
}

function handleSubmit(e){ 
    e.preventDefault();
    const newTarea={
        id: Date.now(),
        title: title,
        complete:false,
    };

    const temp=[...tarea];
    temp.unshift(newTarea);

    setTarea(temp);
    setTitle("");
}

function handleUpdate(id, value){
    const temp = [...tarea];
    const item = temp.find((item)=>item.id===id);
    item.title=value;
    setTarea([...temp]);
}

function handleDelete(id){
    const tempTarea=tarea.filter((item)=> item.id !==id);
    setTarea([...tempTarea]);
}

return (
    <div className="todoContainer">
        <form onSubmit={handleSubmit} className="todoCreateForm">
            <input onChange={handleInputChange} value={title} placeholder="Ingrese la lista de tareas" className="todoInput"/>
            <input className="buttonCreate" value="Crear Tarea" type={"Submit"}/>
        </form>

        <div className="todosContainer">
            {tarea.map((item) => (
                <Todo
                key={item.id}
                item={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                />
            ))}
        </div>
    </div>
    );
}