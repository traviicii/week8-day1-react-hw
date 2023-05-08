import React, { useState, useEffect } from 'react'


export default function ToDo({ ToDos }) {

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
    setInputText(e.target.value )
  }

  const showTodos = () => {
    return todos.map((todo, index) => {<ToDos key={index} todo={todo} />})
    // return todos.map((content, index) => <ToDos key={index} content={content} />)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'column' }}>
      ToDo page is here

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
    </div>
  );
}

