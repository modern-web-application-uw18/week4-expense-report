import React, { Component } from 'react';

class TotalBox extends Component {
    calculateTotal = () => {
        const { items } = this.props;
        const total = items.reduce((runningTotal, item) => {
            const cost = parseFloat(item.cost);
            if (Number.isNaN(cost)) {
                return runningTotal;
            }
            return runningTotal + cost;
        }, 0);
        return total;
    }

    render() {
        return (
            <strong>Total: {this.calculateTotal()}</strong>
        )
    }
}

export default TotalBox;