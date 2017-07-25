import React, { Component } from 'react';

import CheckBox from '../core/Checkbox';

export default class ProductFilters extends Component{
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }
    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
        this.selectedCheckboxes.delete(label);
        } else {
        this.selectedCheckboxes.add(label);
        }
        this.broadCastToParent();
    }
    broadCastToParent = () => {
        var filterKey = this.props.filterKey;
        var selectedChecks = Array.from(this.selectedCheckboxes);
        var filter = {
            [filterKey]:selectedChecks
        }
        this.props.updateOnNewFilter(filter);
    }
    createCheckbox = label => (
        <li key={label} className="list-group-item">
            <CheckBox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
            />
        </li>
    )
    createfilters = filterValues => (
        filterValues.map(this.createCheckbox)
    )

    render(){
        var filterType = this.props.filterType;
        
        var filterValues = this.props.filterValues;
        return(
                <div className="panel filter-panel panel-default">
                    <div className="panel-heading">{filterType}</div>
                    <ul className="list-group">
                        {this.createfilters(filterValues)}
                    </ul>
                </div>
        );
    }
};