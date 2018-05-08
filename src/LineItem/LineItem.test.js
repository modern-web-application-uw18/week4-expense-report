import React from 'react';
import ReactDOM from 'react-dom';
import LineItem from './LineItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const item = {
    name: 'my expense',
    cost: 500
  };
  const onItemChange = jest.fn();

  ReactDOM.render(<LineItem item={item} onItemChange={onItemChange} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
