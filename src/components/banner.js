import React, { Component } from "react";
import {Button, Modal} from 'react-bootstrap';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    toggleModel(show) {
        if(!show) { show = true }
       this.setState({
           show
       })
    }

    handleClose(show){
        show = false
        this.setState({
            show
        })

    }

    render() {
        return (
            <section className="banner">
                <div className="banner-bg">
                    <img src={window.location.origin + '/banner-bg.png'} />
                </div>
                <img className="left-cloud" src={window.location.origin + '/cloud.png'} />

                <div className="banner-content">
                    <div className="title">
                    Lorem Ipsum
                    </div>
                    <div className="sub-title">
                    dolor sit amet, consectetur<br/>
                    adipiscing elit, sed do eiusmod tempor
                    </div>
                    <div className="video text-right">
                      <Button className="video-btn" variant="link" onClick={this.toggleModel.bind(this, true)}>
                         <img src={window.location.origin + '/video-thumb.png'} />
                      </Button>
                    </div>

                    
                </div>
                <div className="banner-character">
                    <img src={window.location.origin + '/character.png'} />
                </div>
                <img className="right-cloud" src={window.location.origin + '/cloud.png'} />


                <Modal centered size="lg" show={this.state.show} onHide={this.handleClose.bind(this, false)} >
                
                    {/* <Modal.Header closeButton>
                      <Modal.Title>Video</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body className="p-0">
                    <iframe width="100%" height="480" src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       
                      <Button variant="danger" className="closeModal" onClick={this.handleClose.bind(this, false)}>
                      &#10006;
                      </Button>
                    </Modal.Body>
                    {/* <Modal.Footer>
                      
                    </Modal.Footer> */}
                  </Modal>

            </section>
        )
    }
}


export default Banner;
