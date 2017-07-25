import React, { Component } from 'react';

import Product from './Product';

export default class FilteredProducts extends Component{
    render(){
        var products = this.props.products;
        var productsHtml = products.map(function(product){
                            return (
                                <div key={product.id} className="col-md-3">
                                        <Product product={product}></Product>
                                </div>
                            );
                          });
        return(
            <div className="col-md-10">
                {productsHtml}
            </div>
        );
    }
};