import React, { useState } from 'react'
import ToDos from '../components/ToDos';


export default function ToDoList({ user }) {

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const newstate = [...todos, inputText]
    setTodos(newstate)
    setInputText('')
    // this.setState({todos: newstate, inputText: ''})
    // console.log(e.target[0].value)
    console.log(newstate)
  }

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const showTodos = () => {
    return todos.map((todo, index) => <ToDos key={index} index={index} todo={todo} todos={todos} setTodos={setTodos} />)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'column' }}>
      ToDo page is here


      {user.apitoken ?
        <>
          <form action="" onSubmit={handleSubmit} style={{ maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px' }}>
            <input type='text' placeholder='Input your task' name='input1' value={inputText} onChange={handleChange} />
            <button>Add Todo</button>
          </form>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '500px' }}>
              <ul className="list-group">
                {showTodos()}
              </ul>
            </div>
          </div>

        </>
        :
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul className="list-group">
            <h2>Please log in or create an account.</h2>
          </ul>
        </div>
      }
    </div >
  );
}

