import React, { Component } from 'react';
import lodash from 'lodash';


import ProductFilter from './ProductFilter';

export default class ProductFilters extends Component{
    componentWillMount = () => {
        this.filters = {};
    }
    updateOnNewFilter = (filter) =>{
        var filterKey = Object.keys(filter)[0]
        var filterValue = Object.values(filter)[0];
        this.filters[filterKey] = filterValue;
        this.props.updateAllFilters(this.filters);
    }
    render(){
        var products = this.props.products;
        var operatingSystems = lodash.uniq(lodash.map(products, 'operating_system'));
        var primaryCamera = lodash.uniq(lodash.map(products, 'primary_camera'));
        var screenSize = lodash.uniq(lodash.map(products, 'screen_size'));
        var brands = lodash.uniq(lodash.map(products, 'brand'));
        return(
            <div className="col-md-2 product-filter-wrapper">
                <ProductFilter updateOnNewFilter={this.updateOnNewFilter} filterType="Operating System" filterKey="operating_system" filterValues={operatingSystems}></ProductFilter>
                <ProductFilter updateOnNewFilter={this.updateOnNewFilter} filterType="Primary Camera" filterKey="primary_camera" filterValues={primaryCamera}></ProductFilter>
                <ProductFilter updateOnNewFilter={this.updateOnNewFilter} filterType="Screen Size" filterKey="screen_size" filterValues={screenSize}></ProductFilter>
                <ProductFilter updateOnNewFilter={this.updateOnNewFilter} filterType="Brand" filterKey="brand" filterValues={brands}></ProductFilter>
            </div>
        );
    }
};