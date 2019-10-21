import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label, onDelete, onToggleDone, onToggleImportant, important, done } = this.props;

        let itemClassName = "todo-list-item d-flex align-items-center justify-content-between";
        if(done) itemClassName += ' done';

        const spanClassName = important ? 'important' : '';

        return (
            <div className={ itemClassName }>
                <span
                    className={spanClassName}
                    onClick={ onToggleDone }>
                    { label }
                </span>

                <div className="buttons">
                    <button
                        onClick={ onToggleImportant }
                        className="btn btn-outline-success mx-1"
                        type="button">
                        <i className="fa fa-exclamation"> </i>
                    </button>

                    <button
                        onClick={ onDelete }
                        className="btn btn-outline-danger mx-1"
                        type="button">
                        <i className="fa fa-trash-o"> </i>
                    </button>
                </div>
            </div>
        );
    }
}