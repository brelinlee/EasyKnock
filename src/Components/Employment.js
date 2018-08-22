import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEmploymentStatus } from "../redux/Employment.js";

class Employment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employmentStatus: "",
      borderColor1: "teal",
      borderColor2: "teal",
      borderColor3: "teal",
      borderColor4: "teal"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(status) {
    if (status === "employed") {
      let color = this.state.borderColor1 === "teal" ? "orange" : "teal";
      let employmentStatus = this.state.borderColor1 === "teal" ? status : "";
      this.setState({ borderColor1: color, employmentStatus });
    } else if (status === "unemployed") {
      let color = this.state.borderColor2 === "teal" ? "orange" : "teal";
      let employmentStatus = this.state.borderColor2 === "teal" ? status : "";
      this.setState({ borderColor2: color, employmentStatus });
    } else if (status === "retired") {
      let color = this.state.borderColor3 === "teal" ? "orange" : "teal";
      let employmentStatus = this.state.borderColor3 === "teal" ? status : "";
      this.setState({ borderColor3: color, employmentStatus });
    } else if (status === "others") {
      let color = this.state.borderColor4 === "teal" ? "orange" : "teal";
      let employmentStatus = this.state.borderColor4 === "teal" ? status : "";
      this.setState({ borderColor4: color, employmentStatus });
    }
  }
  render() {
    return (
      <div className="segment">
        <div className="entry-h1">
          <h1>What is your current employment status?</h1>
        </div>
        <div className="column-of-4">
          <div
            className="col span-1-of-4 icon-container"
            style={{ borderColor: this.state.borderColor1 }}
            onClick={e => this.handleClick("employed", e)}
          >
            <i className="fa fa-building fa-4x" aria-hidden="true" />
            <h5>Employed</h5>
          </div>
          <div
            className="col span-1-of-4 icon-container"
            style={{ borderColor: this.state.borderColor2 }}
            onClick={e => this.handleClick("unemployed", e)}
          >
            <i className="fa fa-rocket fa-4x" aria-hidden="true" />
            <h5>Unemployed</h5>
          </div>
          <div
            className="col span-1-of-4 icon-container"
            style={{ borderColor: this.state.borderColor3 }}
            onClick={e => this.handleClick("retired", e)}
          >
            <i className="fa fa-ship fa-4x" aria-hidden="true" />
            <h5>Retired</h5>
          </div>
          <div
            className="col span-1-of-4 icon-container"
            style={{ borderColor: this.state.borderColor4 }}
            onClick={e => this.handleClick("others", e)}
          >
            <i className="fa fa-search fa-4x" aria-hidden="true" />
            <h5>Others</h5>
          </div>
        </div>
        <div className="entry-button">
          <Link to="/monthlyincome">
            <div
              className="ui button"
              role="button"
              onClick={e =>
                this.props.handleEmployment(e, this.state.employmentStatus)
              }
            >
              Continue
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatch = function(dispatch, ownProps) {
  return {
    handleEmployment: (evt, employmentStatus) => {
      evt.preventDefault();
      dispatch(getEmploymentStatus(employmentStatus));
      ownProps.history.push("/monthlyincome");
    }
  };
};

export default connect(
  null,
  mapDispatch
)(Employment);
