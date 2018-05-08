import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseReport from './ExpenseReport';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExpenseReport />, div);
  ReactDOM.unmountComponentAtNode(div);
});
