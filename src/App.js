import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ExpenseReport from './ExpenseReport/ExpenseReport';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Expense Report</h1>
        <ExpenseReport />
      </div>
    );
  }
}

export default App;
