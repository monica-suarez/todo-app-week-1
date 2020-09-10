import React from 'react';

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isClicked: false
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () =>{
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render() {
        return(
        <button onClick={this.handleClick}>Click Me</button>
        )
    }
}

export default TodoApp