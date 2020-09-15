import React from 'react';


class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // isClicked: false,
            text: '',
            todos: []
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.textUpdate = this.textUpdate.bind(this);
    }

    textUpdate = (event) =>{
        this.setState({
            text: event.target.value
        })
    }
    handleClick = (event) =>{
        event.preventDefault()
        this.setState({
            // isClicked: !this.state.isClicked,
            todos: [...this.state.todos, this.state.text],
            text: ''
        })
    }
    removeTodo = (index) =>{
        const list = this.state.todos.splice(index, 1);
        this.setState({
          list
        })
    }
        
    render() {
        return(
        <form onSubmit={this.handleClick}>
            <input value={this.state.text} onChange={this.textUpdate}></input>
            <button>Add Todo</button>
            <ul>
                {this.state.todos.map((todo, index)=>{
                    return <div key={index} className='todo-li'>
                                <li>{this.state.todos[index]}</li>
                                <button type='button' onClick={this.removeTodo.bind(this, index)}>Remove Todo</button>
                            </div>
                })}
            </ul>
        </form>
        )
    }
}

export default TodoApp