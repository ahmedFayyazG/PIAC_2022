import React, { Component } from "react";

const TransectionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSECTION": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default TransectionReducer;
