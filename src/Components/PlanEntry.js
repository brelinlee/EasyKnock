import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getEquityUse } from "../redux/EquityUse.js";

class PlanEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equityUsage: "",
      borderColor1: "teal",
      borderColor2: "teal",
      borderColor3: "teal",
      borderColor4: "teal",
      borderColor5: "teal"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(usage) {
    if (usage === "credit card") {
      let color = this.state.borderColor1 === "teal" ? "orange" : "teal";
      let equityUsage = this.state.borderColor1 === "teal" ? usage : "";
      this.setState({ borderColor1: color, equityUsage });
    } else if (usage === "health care") {
      let color = this.state.borderColor2 === "teal" ? "orange" : "teal";
      let equityUsage = this.state.borderColor2 === "teal" ? usage : "";
      this.setState({ borderColor2: color, equityUsage });
    } else if (usage === "education") {
      let color = this.state.borderColor3 === "teal" ? "orange" : "teal";
      let equityUsage = this.state.borderColor3 === "teal" ? usage : "";
      this.setState({ borderColor3: color, equityUsage });
    } else if (usage === "business") {
      let color = this.state.borderColor4 === "teal" ? "orange" : "teal";
      let equityUsage = this.state.borderColor4 === "teal" ? usage : "";
      this.setState({ borderColor4: color, equityUsage });
    } else if (usage === "homeimprovement") {
      let color = this.state.borderColor4 === "teal" ? "orange" : "teal";
      let equityUsage = this.state.borderColor4 === "teal" ? usage : "";
      this.setState({ borderColor4: color, equityUsage });
    }
  }

  render() {
    return (
      <div className="segment">
        <div className="entry-h1">
          <h1>How do you plan to use the equity in your home?</h1>
        </div>
        <div className="column-of-5 ">
          <div
            className="col span-1-of-5 icon-container"
            style={{ borderColor: this.state.borderColor1 }}
            onClick={e => this.handleClick("credit card", e)}
          >
            <Icon
              name="credit card outline"
              size="massive"
              className="big-icon"
            />
            <h5>Debt</h5>
          </div>

          <div
            className="col span-1-of-5 icon-container"
            style={{ borderColor: this.state.borderColor2 }}
            onClick={e => this.handleClick("health care", e)}
          >
            <Icon name="medkit" size="massive icon" className="big-icon" />
            <h5>Health Care</h5>
          </div>

          <div
            className="col span-1-of-5 icon-container"
            style={{ borderColor: this.state.borderColor3 }}
            onClick={e => this.handleClick("education", e)}
          >
            <Icon name="student" size="massive icon" className="big-icon" />
            <h5>Education</h5>
          </div>

          <div
            className="col span-1-of-5 icon-container"
            style={{ borderColor: this.state.borderColor4 }}
            onClick={e => this.handleClick("business", e)}
          >
            <Icon name="briefcase" size="massive icon" className="big-icon" />
            <h5>Business</h5>
          </div>

          <div
            className="col span-1-of-5 icon-container"
            style={{ borderColor: this.state.borderColor5 }}
            onClick={e => this.handleClick("home improvement", e)}
          >
            <Icon name="home" size="massive icon" className="big-icon" />
            <h5>Home Improvement</h5>
          </div>
        </div>
        <div className="entry-button">
          <Link to="/employment">
            <div
              className="ui button"
              role="button"
              onClick={e =>
                this.props.handleEquityUsage(e, this.state.equityUsage)
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
    handleEquityUsage: (evt, usage) => {
      evt.preventDefault();
      dispatch(getEquityUse(usage));
      ownProps.history.push("/employment");
    }
  };
};

export default connect(
  null,
  mapDispatch
)(PlanEntry);
