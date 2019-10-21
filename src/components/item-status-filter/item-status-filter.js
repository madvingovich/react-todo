import React, {Component} from 'react';


export default class ItemStatusFilter extends Component {

    buttons = [
        {label: 'All', action: 'all'},
        {label: 'Active', action: 'active'},
        {label: 'Done', action: 'done'},
    ];

    render() {
        const { filter, onFilter } = this.props;

        const buttons = this.buttons.map(({label, action}) => {
            const className = action === filter ? 'btn btn-info' : 'btn btn-outline-secondary';
            return (
                <button className={ className }
                        onClick={() => {onFilter(action)}}
                        type="button"
                        key={label} >
                    { label }
                </button>
            )
        });

        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    }
}