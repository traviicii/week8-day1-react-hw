import React, { useState } from 'react'


export default function ToDos({ todos, todo, content, key, setToDos }) {
    
    const [completed, setCompleted] = useState(false)

        
    const done = {color: 'green'}
    const notdone = {}
    

    const handleChange = () => {
        setCompleted(!completed)
    }

    const removeTodo = (e, index) => {
       return setToDos(todos.filter(!index))
    }

   
        const itemIndex = key
        return (
            <>

                <li className="list-group-item" >
                    <button type="button" className="btn-close" onClick={(e) => {removeTodo(e, key)}} aria-label="Close" style={{marginRight: '20px'}}></button>
                    <input className="form-check-input me-1" type="checkbox" onChange={handleChange} value="" id="firstCheckbox" style={{marginRight: '20px'}}/>
                    <label className="form-check-label" style={completed ? done : notdone} htmlFor="firstCheckbox">{ todo }</label>
                </li>

            </>
        )
    }
