import React, { Component, useReducer } from "react";

export const AmountReducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
  }
};

//export default AmountReducer;

export const SwitchReducer = (state, action) => {
  switch (action) {
    case "INCOME":
      return {
        state: true,
      };

    case "EXPENSE":
      return {
        state: false,
      };
  }
};
