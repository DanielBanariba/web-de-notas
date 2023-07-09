import { useState } from "react"
import "./danielbarrientos.css"

export default function Todo({item, onUpdate, onDelete}){
    const [isEdit, setIsEdit]= useState(false);
    const [value, setValue]= useState(item.title ?? "");

    function handleChange(e){
        setValue(e.target.value);
    }

    function handleUpdate(e){
        onUpdate(item.id, value);
        setIsEdit(false);
    }

    function handleSubmit(e){
        e.preventDefault();
        onUpdate(item.id, value);
        setIsEdit(false);
    }

    return (
    <div className="todo">
        {isEdit ? (
            <form onSubmit={handleSubmit} className="todoUpdateForm">
                <input onChange={handleChange} className="todoInput" type={"text"} value={value}/>
                <button className="button" onClick={handleUpdate}>Actualizar</button>
            </form>
        ):(

        <div className="todoInfo"> 
            {item.title}
            <button onClick={()=>setIsEdit(true)} className="button">
                Editar
            </button>
            <button onClick={()=>onDelete(item.id)} className="buttonDelete">
                Eliminar
            </button>
        </div>
            )}
    </div>
);
}