import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getIncome } from "../redux/Income.js";

class MonthlyIncome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyIncome: "5,000"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ monthlyIncome: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="entry-h1">
          <h1>What is your monthly household income?</h1>
        </div>
        <div className="row">
          <form>
            <input
              type="text"
              name="monthlyIncome"
              value={this.state.monthlyIncome}
              onChange={this.handleChange}
              className="input-form"
            />

            <Button
              type="submit"
              value="Submit"
              onClick={e =>
                this.props.handleIncome(e, this.state.monthlyIncome)
              }
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatch = function(dispatch, ownProps) {
  return {
    handleIncome: (evt, income) => {
      evt.preventDefault();
      dispatch(getIncome(income));
      ownProps.history.push("/address");
    }
  };
};

export default connect(
  null,
  mapDispatch
)(MonthlyIncome);
