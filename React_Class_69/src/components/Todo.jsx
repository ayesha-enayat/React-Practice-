import { useState } from 'react'

const Todo = () => {
    const [Todo, setTodo] = useState([{
        value: "Learn React",
        disabled: true
    },
    {

        value: "Learn Backened",
        disabled: true
    }])
    const [value, setValue] = useState("")

    const addTodo = () => {
        setTodo([...Todo, { value , disabled: true }])
        setValue("") // Clear the input field after adding a todo
    }

    return (
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={()=> setTodo([])}>Delete All</button>
            

            <ul>
                {
                    Todo.map((v, i) => <li key={i}>
                        <input type="text" disabled={v.disabled}  defaultValue={v.value} onChange={(e)=>v.value=e.target.value}/>
                       
                       {v.disabled ?
                       <button onClick={() => {
                        Todo.splice(i,1,{...v,disabled:false})
                        setTodo([...Todo]);
                       }}>
                        Edit
                       </button>
                       :
                       <button onClick={()=>{
                        v.disabled = false;
                        setTodo([...Todo]);
                       }}>Update</button>
                    }
                         <button onClick={
                            () => {
                                const oldTodos = [...Todo];
                                oldTodos.splice(i, 1);
                                setTodo(oldTodos);
                            }
                        }> Delete</button></li>

                    )
                }
            </ul>
        </>

    )
}

export default Todo
