import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        value: ''
    };

    onChange = (e) => {
        this.setState({value: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();

        let label = this.state.value.trim();

        if(label.length < 3) {
            alert('Name must be 3 or more symbols');
            return;
        }

        this.props.onAdd(this.state.value);
        this.setState({
            value: ''
        });
    };

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className="item-add-form d-flex align-items-center justify-content-between mt-3">
                <input
                    className="form-control"
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="New Todo's name"
                />
                <button
                    className="btn btn-primary ml-5"
                    type="button"
                    onClick={this.onSubmit}>
                    Add Todo
                </button>
            </form>
        )
    }
};

