import React, { Component } from 'react';

export default class Product extends Component{
    render(){
        let product = this.props.product;
        return(
            <div className="panel product panel-info">
                <div className="panel-body">
                    <img src={'images/'+product.image_url} className="product-img img-responsive" alt="Smartphone"/>
                </div>
                <div className="panel-footer">
                    <h4 className="text-left">{product.mobile_name}</h4>
                    <h5>{product.operating_system} | {product.screen_size} Inchs | {product.ram}GB RAM</h5>
                </div>
            </div>
        );
    }
};