import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {
            todoList: [],
            value: "",
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value })
    }

    add() {
        this.setState({
            todoList: this.state.todoList.concat(this.state.value),
            value: "",
        })
    }

    render() {
        const todoListNode = this.state.todoList.map((todo, idx) => {
            return <li key={idx}>{todo}</li>
        })

        return (
            <div>
                <h1>TODO App</h1>
                <div>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={e => this.onChange(e)}
                    />
                </div>
                <button onClick={() => this.add}>’Ç‰Á</button>
                <ul>
                    {todoListNode}
                </ul>
            </div>
        );
    }
}

export default App;