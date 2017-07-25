import React, { Component } from 'react';
import Products from '../products/Products';

export default class Shell extends Component{
    render(){
        return(
            <section className="wrapper container-fluid">
                <Products></Products>
            </section>
        );
    };
};