import React, { Component } from 'react';

export default class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" 
                            data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Lets Shop</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Mobiles</a></li>
                            <li><a href="#about">Link 2</a></li>
                            <li><a href="#contact">Link 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}