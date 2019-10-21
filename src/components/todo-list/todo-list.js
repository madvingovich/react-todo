import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css'

const TodoList = ({ todos, onDelete, onToggleProperty }) => {

    if(!todos.length) return (
        <li className='list-group-item py-1'>
            <p className="mb-0 py-1">No items</p>
        </li>
    );

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li className='list-group-item py-1' key={ id }>
                <TodoListItem
                    { ...itemProps }
                    onDelete={ () => onDelete(id) }
                    onToggleDone={ () => onToggleProperty(id, 'done') }
                    onToggleImportant={ () => onToggleProperty(id, 'important') }
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;