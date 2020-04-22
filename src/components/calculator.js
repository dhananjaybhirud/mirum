import React, { Component } from "react";
import { Button } from "react-bootstrap";


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 30000,
            term: '55',
            rate: '03',
            yearly: 1 ,
            total: 5700000
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChange(event, type) {
             console.log(event.target.value, type);
      }

    
      handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);
        this.state.term = parseFloat(this.state.term);
        this.state.yearly = parseFloat(this.state.yearly);
        this.state.rate = parseFloat(this.state.rate);
        this.state.amount = parseFloat(this.state.amount);

        // let nt = this.state.yearly * this.state.term; 
        // let newrate = this.state.rate /100; 
        // const power =  1 + (newrate / this.state.yearly);
        // let newPower = Math.pow(power, nt);
        // this.state.total = this.state.amount * newPower;


        let nt = this.state.yearly * this.state.term; 

        let newrate = this.state.rate /100; 
        
        const power =  1 + (newrate / this.state.yearly);

        let newPower = Math.pow(power, nt);

        this.state.total = this.state.amount * newPower;




        this.setState({total: this.state.total});

    
      }
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
                        <form className="calculator-wrapper" onSubmit={this.handleSubmit}>
                            <div className="top-bar"></div>

                            <div className="row m-0">
                                <div className="col-2 p-0 d-flex  align-items-center">
                                    <label className="label">
                                        AMOUNT
                                    </label>
                                    <span class="vertical-line"></span>
                                </div>
                                <div className="col-10 p-0">
                                    <input className="form-control form-control-lg"
                                    defaultValue={this.state.amount}
                                    onChange={(event) => {
                                        this.setState({amount: event.target.value})
                                    }}
                                     type="number" />
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
                                            <input
                                            defaultValue={this.state.term}
                                            onChange={(event) => {
                                                this.setState({
                                                    term: event.target.value
                                                    // term: ((event.target.value < 10) ? ('0' + event.target.value) : event.target.value
                                                })
                                            }}
                                            //  pattern="[0-9*]"
                                            max="99"
                                             className="form-control form-control-lg" type="number" />
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
                                            <input
                                             className="form-control form-control-lg"
                                             defaultValue={this.state.rate}
                                             onChange={(event) => {
                                                this.setState({
                                                    rate:  event.target.value
                                                    // rate: ((event.target.value < 10) ? ('0' + event.target.value) : event.target.value)
                                                })
                                             }}
                                            //  pattern="[0-9*]"
                                             max="99"
                                             type="number" />
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
                                   <Button type="submit" className="btn btn-lg btn-warning">CALCULATE</Button>
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
                                    <input className="form-control form-control-lg" readOnly
                                    value={this.state.total} type="number" />
                                </div>
                            </div>

                        </form>
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
