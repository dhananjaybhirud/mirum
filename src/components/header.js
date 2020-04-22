import React, { Component } from "react";
import {Navbar} from "react-bootstrap";


class Menu extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="justify-content-end bg-transparent fixed-top">
                <Navbar.Brand href="#home" className='p-0'>
                    <img src={window.location.origin + '/logo.png'} height='60'/>
                </Navbar.Brand>
            </Navbar>
        )
    }
}


export default Menu;
