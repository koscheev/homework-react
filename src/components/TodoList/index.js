import React from 'react';
import initialItems from './initialItems.json'

// добавление тудушек на страницу

export class TodoList extends React.Component {
    state = {
        todoItems: initialItems, // массив тудушек
        newItem: '' // то что сейчас в инпуте
    }

    onChangeText = (event) => {
        this.setState({newItem: event.target.value})
    }

    onAddItems = () => {
        const newItems = [...this.state.todoItems]

        const newTodoItem = {
            id: this.state.todoItems.length,
            text: this.state.newItem
        }

        newItems.push (newTodoItem)

        this.setState({todoItems: newItems, newItem: ''})
    }

    render () {
        return (
            <div> 
            {this.state.todoItems.map((item) => {
            return <div key =  {item.id}>{item.text}</div>
        })} 
        <input type="text" onChange = {this.onChangeText} value = {this.state.newItem} />
        <button onClick = {this.onAddItems}>add</button>
        </div>
        )
    }
}
