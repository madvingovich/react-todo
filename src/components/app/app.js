import React, { Component } from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import './app.css';

export default class App extends Component {
    state = {
        todoData: [
            this.createTodoItem('Drink Tea'),
            this.createTodoItem('Learn React', true),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Do English', true),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Take a rest', true),
        ],
        searchText: '',
        filter: 'active',
    };

    createTodoItem(label, important = false) {
        return {
            label,
            important,
            done: false,
            id: Date.now() + Math.random() * 1000
        };
    }

    onAdd = (label) => {
        const newItem = this.createTodoItem(label);

        const newTodoData = this.state.todoData.concat(newItem);

        this.setState({
            todoData: newTodoData
        });
    };

    onDelete = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.filter(item => {
                    return item.id !== id;
                })
            }
        });
    };

    onToggleProperty = (id, property) => {
        this.setState(({ todoData }) => {

            const index = todoData.findIndex(item => item.id === id);

            let newItem = { ...todoData[index] };

            newItem[property] = !newItem[property];

            const newArr = todoData.map(item => {
                return item.id === id ? newItem : item;
            });

            return { todoData: newArr }
        })
    };

    onSearch = searchText => {
        this.setState({
            searchText
        });
    };

    onFilter = (filter) => {
        if(filter === this.state.filter) return;

        this.setState({
            filter
        });
    };

    searchItems(items, searchText) {
        return searchText.length === 0 ?
            items :
            items.filter(item => item.label.toLowerCase().match(searchText.toLowerCase()));
    }

    filterItems(items, filter) {
        return filter === 'all' ?
            items :
            items.filter(item => filter === 'active' ? !item.done : item.done);
    }

    render() {
        const { todoData, filter, searchText } = this.state;
        const doneCount = todoData.reduce((prev, item) => {return item.done ? ++prev : prev}, 0);
        const todoCount = todoData.length - doneCount;

        let visibleItems = this.filterItems(this.searchItems(todoData, searchText), filter);

        return (
            <div className="px-3 pt-3 app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <SearchPanel
                        onSearch={ this.onSearch }
                    />
                    <ItemStatusFilter
                        onFilter={ this.onFilter }
                        filter={ filter }
                    />
                </div>
                <TodoList
                    todos={ visibleItems }
                    onDelete={ this.onDelete }
                    onToggleProperty={ this.onToggleProperty }
                />
                <ItemAddForm onAdd={ this.onAdd } />
            </div>
        );
    }
}