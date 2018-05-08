import React, { Component } from 'react';

class LineItem extends Component {
    render() {
        const { cost, name } = this.props.item;
        return (
            <div>
                <input defaultValue={name} onChange={this.props.onItemChange('name')} />
                <input defaultValue={cost} onChange={this.props.onItemChange('cost')} />
            </div>
        );
    }
}

export default LineItem;