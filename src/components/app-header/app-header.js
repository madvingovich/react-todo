import React from 'react';
import './app-header.css';

const AppHeader = ({ toDo, done } ) => {

    const headerText = toDo === 0 ? 'Nothing to do today!' : `${toDo} more to do, ${done} done`;

    return (
        <div className="app-header d-flex align-items-center justify-content-between">
            <h1>My Todo List</h1>
            <h2>{headerText}</h2>
        </div>
    );
};

export default AppHeader;