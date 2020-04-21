import React, { Component } from "react";
import { Button } from "react-bootstrap";


class Calculator extends Component {
    render() {
        return (
            <section className="calculator">
                <div className="title">
                    Lorem Ipsum <br/>
                    Calculator
                </div>
                <div className="row">
                    <div className="col-md-2">
                       <img className="left-cloud" src={window.location.origin + '/cloud.png'} />
                       <img className="left-poll" src={window.location.origin + '/cal-left-poll.png'} />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="calculator-wrapper">
                            <div className="top-bar"></div>

                            <div className="row m-0">
                                <div className="col-2 p-0 d-flex  align-items-center">
                                    <label className="label">
                                        AMOUNT
                                    </label>
                                    <span class="vertical-line"></span>
                                </div>
                                <div className="col-10 p-0">
                                    <input className="form-control form-control-lg" type="number" />
                                </div>
                            </div>
                            <br />

                            <div className="row m-0">
                                <div className="col-2 p-0 d-flex  align-items-center">
                                    <label className="label">
                                        TERM
                                    </label>
                                    <span class="vertical-line"></span>
                                </div>
                                <div className="col-5 p-0">
                                    <div className="row m-0">
                                        
                                        <div className="col-4 p-0">
                                            <input className="form-control form-control-lg" type="number" />
                                        </div>
                                        <div className="col-8 p-0 d-flex  align-items-center">
                                            <label className="label">
                                                YEARS
                                            </label>
                                            <span class="vertical-line"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 p-0">
                                    <div className="row m-0">
                                        <div className="col-4 p-0 d-flex  align-items-center">
                                            <label className="label">
                                                RATE
                                            </label>
                                        </div>
                                        <div className="col-4 p-0">
                                            <input className="form-control form-control-lg" type="number" />
                                        </div>
                                        <div className="col-4 p-0 d-flex  align-items-center">
                                            <label className="label">
                                                %
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div className="row calculate-btn-div">
                                <div className="col-12 p-0 text-center">
                                   <Button className="btn btn-warning">CALCULATE</Button>
                                </div>
                            </div>

                            <div className="row m-0">
                                <div className="col-2 p-0 d-flex  align-items-center">
                                    <label className="label">
                                        TOTAL
                                    </label>
                                    <span class="vertical-line"></span>
                                </div>
                                <div className="col-10 p-0">
                                    <input className="form-control form-control-lg" readOnly type="number" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-2">
                       <img className="right-cloud" src={window.location.origin + '/cloud.png'} />
                       <img className="right-poll" src={window.location.origin + '/cal-right-poll.png'} />
                    </div>
                </div>
            </section>
        )
    }
}


export default Calculator;
