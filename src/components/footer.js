import React, { Component } from "react";
import {Navbar} from "react-bootstrap";


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="social">
                    <a className="facebook"></a>
                    <a className="twitter"></a>
                    <a className="linkedin"></a>
                    <a className="youtube"></a>
                </div>
                <div className="footer-text">
                Disclaimer | Terms of Use & Privacy Notice  
                </div>
                <div className="footer-text">
                © 2020 MIRUM. All Rights Reserved
                </div>
            </footer>
        )
    }
}


export default Footer;
