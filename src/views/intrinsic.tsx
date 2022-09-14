import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../viewConnectors/vcIntrinsic";
import "./../style/intrinsic.css";
import { Constants } from "../utils/IntrinsicConstants";
import { Button } from "react-bootstrap";

interface IntrinsicViewProps {
  readonly intrinsicState: any;
  readonly onInputChange: (e: any) => any;
  readonly calculateIntrinsicValue: () => void;
  readonly reset: () => void;
}

class Intrinsic extends React.Component<IntrinsicViewProps> {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <input
            type="text"
            onChange={this.props.onInputChange}
            value={this.props.intrinsicState.cashFlowValues}
            name={Constants.FREE_CASH_FLOW_INPUT}
            className="form-control marginTop20px"
            placeholder="Enter free cash flow for last 10 years by comma(,) seprated"
          />
          <div className="row">
            <div className="col-md-6">
              <input
                type="number"
                onChange={this.props.onInputChange}
                name={Constants.TOTAL_SHARE_INPUT}
                value={this.props.intrinsicState.totalShares}
                className="form-control marginTop20px"
                placeholder="Enter total number of shares"
              />
            </div>

            <div className="col-md-6">
              <input
                type="number"
                onChange={this.props.onInputChange}
                value={this.props.intrinsicState.discountRate}
                name={Constants.DISCOUNT_RATE_INPUT}
                className="form-control marginTop20px"
                placeholder="Enter discount rate"
              />
            </div>

            <div className="col-md-6">
              <input
                type="number"
                onChange={this.props.onInputChange}
                value={this.props.intrinsicState.firstFiveYearIncrimentRate}
                name={Constants.FIRST_5_YEAR_INC_RATE}
                className="form-control marginTop20px"
                placeholder="Enter first 5 year incriment rate"
              />
            </div>

            <div className="col-md-6">
              <input
                type="number"
                onChange={this.props.onInputChange}
                name={Constants.NEXT_5_YEAR_INC_RATE}
                value={this.props.intrinsicState.nextFiveYearIncrimentRate}
                className="form-control marginTop20px"
                placeholder="Enter next 5 year incriment rate"
              />
            </div>
          </div>
          <input
            type="number"
            onChange={this.props.onInputChange}
            value={this.props.intrinsicState.cashComapnyHaveWhenWillBeSold}
            name={Constants.CASH_WHEN_COMPANY_WILL_SELL}
            className="form-control marginTop20px"
            placeholder="Cash company will have when we sell company after 10 years"
          />

          <Button
            onClick={this.props.calculateIntrinsicValue}
            variant="primary"
            className="width100Per marginTop20px backgroundDarkViolet"
          >
            Calculate
          </Button>

          <Button
            onClick={this.props.reset}
            variant="primary"
            className="width100Per marginTop20px backgroundDarkViolet"
          >
            Reset
          </Button>
        </div>

        <h1 className="text-center marginTop20px">
          Intrinsic Value : {this.props.intrinsicState.intrinsicValue}
        </h1>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intrinsic);
