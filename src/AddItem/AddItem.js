import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddItem.css';

class AddItem extends Component {
    render() {
        return (
            <button className="AddItem" onClick={this.props.onAddItemClick}>+</button>
        )
    }
}

AddItem.propTypes = {
    onAddItemClick: PropTypes.func.isRequired
};

export default AddItem;