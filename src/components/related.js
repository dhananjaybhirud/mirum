import React, { Component } from "react";
import {Navbar} from "react-bootstrap";


class Related extends Component {
    render() {
        return (
            <section className="related">
                <div className="title">
                    Related
                </div>
                <div className="row">
                    <div className="col-1 col-md-3"></div>
                    <div className="col-5 col-md-3 text-center">
                         <img src={window.location.origin + '/related-1.png'} />
                         <div className="name">
                             Space Ipsum
                         </div>
                    </div>
                    <div className="col-5 col-md-3 text-center">
                         <img src={window.location.origin + '/related-2.png'} />
                         <div className="name">
                             Zombie Ipsum
                         </div>
                    </div>
                    <div className="col-1 col-md-3"></div>
                </div>
            </section>
        )
    }
}


export default Related;
