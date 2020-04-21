import React, { Component, useState } from "react";
import ReadMoreAndLess from "react-read-more-less";
import { Carousel } from "react-bootstrap";
import Data from "./data";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
    };
  }
  render() {
    return (
      <section className="articles">
        <div className="title">Articles</div>

        <div className="row">
          <div className="col-10 offset-1">
            <Carousel>
              {this.state.data.map((x, index) => {
                return (
                  <Carousel.Item>
                    <article className="row">
                      <div className="col-12 col-md-5 align-self-center">
                        <img
                          className="img-fluid"
                          src={window.location.origin + "/article-thumb.png"}
                        />
                      </div>
                      <div className="col-12 col-md-7 align-self-center">
                        <div className="article-title">{x.name}</div>
                        <div className="article-des">
                          <ReadMoreAndLess
                            ref={this.ReadMore}
                            className="read-more-content"
                            charLimit={600}
                            readMoreText="Read more ..."
                            readLessText="Read less"
                          >
                            {x.about}
                          </ReadMoreAndLess>
                        </div>
                      </div>
                    </article>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
