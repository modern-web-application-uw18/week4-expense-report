import React, { Component } from 'react';

import LineItem from '../LineItem/LineItem';
import AddItem from '../AddItem/AddItem';
import TotalBox from '../TotalBox/TotalBox';

import './ExpenseReport.css'

class ExpenseReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineItems: [
                { name: 'Flight to LAX', cost: 177 }
            ]
        };
    }

    onItemChange = (idx) => {
        return (attr) => {
            return (e) => {
                const newValue = e.target.value;
                this.setState((prevState, props) => {
                    const newLineItems = prevState.lineItems;
                    newLineItems[idx][attr] = newValue;
                    return {
                        lineItems: newLineItems
                    };
                });
            }
        }
    }

    addItem = () => {
        this.setState((prevState, props) => {
            const lineItem = {
                name: '',
                cost: ''
            };
            const newLineItems = prevState.lineItems;
            newLineItems.push(lineItem);
            return {
                lineItems: newLineItems
            };
        });
    }

    render() {
        console.log(this.state);
        const lineItems = this.state.lineItems.map((item, idx) => {
            return <LineItem
                        onItemChange={this.onItemChange(idx)}
                        item={item}
                        key={idx}
                    />;
        });
        return (
            <div>
                <h1>Hi, I am an expense report</h1>
                <div className="ExpenseReport">
                    {lineItems}
                    <AddItem onAddItemClick={this.addItem} />
                    <TotalBox items={this.state.lineItems} />
                </div>
            </div>
        );
    }
}

export default ExpenseReport;