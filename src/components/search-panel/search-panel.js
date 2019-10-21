import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        value: ''
    };

    onSearch = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');

        this.setState({
            value
        });

        this.props.onSearch(value);
    };

    render() {
        const placeholder = 'Type to search...';

        return (
            <input
                className="w-100 search-input mr-5"
                type="text"
                placeholder={ placeholder }
                onChange={ this.onSearch }
                value={ this.state.value }
            />
        );
    }
};
