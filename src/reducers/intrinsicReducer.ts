import { Reducer } from "redux";
import intrinsicActionTypes from "../actionTypes/intrinsicActionTypes";
import { intrinsicDTO } from "../DTOs/intrinsicDTO";
import { Constants } from "../utils/IntrinsicConstants";

const initialState: intrinsicDTO = {
  cashFlowValues: "",
  cashComapnyHaveWhenWillBeSold: "",
  nextFiveYearIncrimentRate: "",
  firstFiveYearIncrimentRate: "",
  discountRate: "",
  totalShares: "",
  intrinsicValue: 0,
  isAllFieldsFilled: false,
  panCardList: [
    "BPKPV9644F",
    "BNSPV0977R",
    "AOBPC5335F",
    "GAZPD5768",
    "EMEPR7120A",
  ],
  investorList: [
    "Rahul Verma",
    "Vijay Verma",
    "Charanajit",
    "Indra Devi",
    "Nisha",
  ],
  investorDetails: [],
  password: "",
};

const intrinsicReducer: Reducer<intrinsicDTO> = (
  state = initialState,
  action
) => {
  const newState = { ...state };
  switch (action.type) {
    case intrinsicActionTypes.CASH_FLOW_INPUT_CHANGE: {
      if (action.data.name === Constants.FREE_CASH_FLOW_INPUT)
        newState.cashFlowValues = action.data.value;
      else if (action.data.name === Constants.CASH_WHEN_COMPANY_WILL_SELL) {
        newState.cashComapnyHaveWhenWillBeSold = action.data.value;
      } else if (action.data.name === Constants.DISCOUNT_RATE_INPUT) {
        newState.discountRate = action.data.value;
      } else if (action.data.name === Constants.FIRST_5_YEAR_INC_RATE) {
        newState.firstFiveYearIncrimentRate = action.data.value;
      } else if (action.data.name === Constants.NEXT_5_YEAR_INC_RATE) {
        newState.nextFiveYearIncrimentRate = action.data.value;
      } else if (action.data.name === Constants.TOTAL_SHARE_INPUT) {
        newState.totalShares = action.data.value;
      }
      return newState;
    }

    case intrinsicActionTypes.VALIDATE_FIELDS: {
      if (
        newState.cashComapnyHaveWhenWillBeSold === "" ||
        // TODO : cashFlowValues validation pending
        newState.cashFlowValues === "" ||
        newState.discountRate === "" ||
        newState.firstFiveYearIncrimentRate === "" ||
        newState.nextFiveYearIncrimentRate === "" ||
        newState.totalShares === ""
      ) {
        newState.isAllFieldsFilled = false;
        alert("All fields are required");
      } else {
        newState.isAllFieldsFilled = true;
      }
      return newState;
    }

    case intrinsicActionTypes.RESET_VALUES: {
      newState.cashComapnyHaveWhenWillBeSold = "";
      newState.cashFlowValues = "";
      newState.discountRate = "";
      newState.firstFiveYearIncrimentRate = "";
      newState.nextFiveYearIncrimentRate = "";
      newState.totalShares = "";
      return newState;
    }

    case intrinsicActionTypes.CALCULATE_INTRINSIC_VALUE: {
      if (newState.isAllFieldsFilled) {
        const cashFlows = newState.cashFlowValues.split(",");
        let avgCashFlow = 0;
        console.log("CashFlow : " + cashFlows);
        for (let i = 0; i < cashFlows.length; i++) {
          avgCashFlow = avgCashFlow + parseInt(cashFlows[i]);
        }
        avgCashFlow = Math.floor(avgCashFlow / cashFlows.length);
        console.log("avgCashFlow : " + avgCashFlow);
        if (avgCashFlow <= 0) {
          alert("Leave it bhai ji...");
          return newState;
        }

        const nextTenYearFCF: any = [];
        let isFiveYearDone = false;
        for (let i = 1; i <= 10; i++) {
          if (isFiveYearDone) {
            avgCashFlow =
              avgCashFlow +
              (avgCashFlow / 100) *
                parseInt(newState.nextFiveYearIncrimentRate);
            nextTenYearFCF.push(Math.floor(avgCashFlow));
          } else {
            if (i === 5) {
              isFiveYearDone = true;
            }
            avgCashFlow =
              avgCashFlow +
              (avgCashFlow / 100) *
                parseInt(newState.firstFiveYearIncrimentRate);
            nextTenYearFCF.push(Math.floor(avgCashFlow));
          }
        }
        console.log("nextTenYearFCF : " + nextTenYearFCF);
        const nextTenYearFCFPresentValues: any = [];
        let totalFCFPresentValue = 0;
        for (let i = 0; i < nextTenYearFCF.length; i++) {
          const persentValue = Math.floor(
            nextTenYearFCF[i] /
              Math.pow(1 + parseInt(newState.discountRate) / 100, i + 1)
          );
          totalFCFPresentValue = totalFCFPresentValue + persentValue;
          nextTenYearFCFPresentValues.push(persentValue);
        }

        console.log(
          "nextTenYearFCFPresentValues" + nextTenYearFCFPresentValues
        );

        const companySellingPrice = nextTenYearFCFPresentValues[9] * 10;
        const pvOfCashOnSellingTime = Math.floor(
          parseInt(newState.cashComapnyHaveWhenWillBeSold) /
            Math.pow(1 + 0.1, 10)
        );

        const totalValueation =
          (companySellingPrice + pvOfCashOnSellingTime + totalFCFPresentValue) *
          10000000;

        newState.intrinsicValue = Math.floor(
          totalValueation / parseInt(newState.totalShares)
        );
      }
      return newState;
    }

    case intrinsicActionTypes.ON_PASSWORD_INPUT_CHANGE: {
      if (action.data.name === Constants.PASSWORD) {
        newState.password = action.data.value;
      }
      return newState;
    }

    case intrinsicActionTypes.INTIAL_INVESTOR_DETAILS: {
      for (let i = 0; i < newState.panCardList.length; i++) {
        newState.investorDetails[i] =
          newState.investorList[i] + " : " + newState.panCardList[i];
      }
      console.log("investorDetails : " + newState.investorDetails);
      return newState;
    }

    case intrinsicActionTypes.TRANSLATE: {
      let ans = newState.password.codePointAt(0);
      for (let i = 1; i < newState.password.length; i++) {
        const codePointAtI = newState?.password?.codePointAt(i);
        if (ans !== undefined && codePointAtI !== undefined)
          ans = ans ^ codePointAtI;
      }
      console.log(String.fromCharCode(ans !== undefined ? ans : 0));
      return newState;
    }

    default: {
      return newState;
    }
  }
};

export default intrinsicReducer;
