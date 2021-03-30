import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: 1,
      value: "Write down your profound idea",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <form className="form-inline container">
          <div className="container">
            <div className="row formRow">
              <div className="col">
                <textarea
                  className="w-100 form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={this.state.value}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
            <div className="row formRow">
              <div className="col">
                <input
                  className="form-control w-100 mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
              </div>
              <div className="col-4">
                <button type="submit" className="w-100 btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* <textarea
            value={this.state.text}
            onChange={this.handleChange()}
            name="paragraph_text"
            cols="50"
            rows="10"
          ></textarea> */}
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
