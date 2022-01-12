// import React, { Component, useContext, useReducer, useState } from "react";
// import styled from "styled-components";
// import Divider from "@mui/material/Divider";
// import { Button } from "@mui/material";
// import SwitchButton from "./SwitchButton";
// import CounterContext from "../ContextAPI/HistoryContext";
// import { AmountReducer, SwitchReducer } from "./AmountReducer";

// const ExpenseHome = () => {
//   const [income, setIncome] = useState(0);
//   const [expense, setExpense] = useState(0);
//   const [total, setTotal] = useState(0);
//   const ContextValue = useContext(CounterContext);
//   const [state, dispatch] = useReducer(AmountReducer, 0);
//   const [state2, dispatch2] = useReducer(SwitchReducer);

//   return (
//     <div>
//       <HomeLayoutBox>
//         <Heading>ExpenseTrackin</Heading>
//         <h4 style={{ margin: "10px" }}>Your Balance</h4>
//         <p style={{ margin: "5px", fontSize: "30px", fontWeight: "1000" }}>
//           ${state}
//         </p>
//         <AmountBox>
//           <h5>INCOME</h5>
//           <Divider orientation="vertical" flexItem />
//           <h5>EXPENSE</h5>
//         </AmountBox>
//         <h4 style={{ margin: "5px" }}>History</h4>
//         <Divider />
//         <HistoryContent />

//         <SwitchButton />
//         <h4 style={{ margin: "5px" }}>Add New Transection</h4>
//         <h4> {state2} </h4>
//         <Divider />
//         <form>
//           <label>Name</label>
//           <input type="text" />
//           <br />
//           <label>Amount</label>
//           <br />
//           <label> -ive Amount for Expense, +ive for Income</label>
//           <input type="text" />
//           <br />

//           <button
//             onClick={() => {
//               dispatch("INCREMENT");
//             }}
//           >
//             Add Transection
//           </button>
//         </form>
//       </HomeLayoutBox>
//     </div>
//   );
// };

// export default ExpenseHome;

// const HomeLayoutBox = styled.div`
//   height: 680px;
//   width: 460px;
//   margin: auto;
//   border: 1px;

//   border-radius: 25px;
// `;

// const Heading = styled.div`
//   margin-left: 210px;
//   margin-right: 210px;
//   font-weight: 1000;
// `;

// const AmountBox = styled.div`
//   height: 100px;
//   width: 400px;
//   background: #f8f3f2;
//   border-style: hidden;
//   margin: 20px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
// `;

// const HistoryContent = styled.div`
//   height: 130px;
//   width: 460px;
//   background: #f8f3f2;
// `;

import React, { useReducer } from "react";

function loginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password!",
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "logOut": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}
const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};
export default function LoginUseReducer() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await function login({ username, password }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (username === "ejiro" && password === "password") {
              resolve();
            } else {
              reject();
            }
          }, 1000);
        });
      };
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: "logOut" })}>
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "username",
                  payload: e.currentTarget.value,
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: e.currentTarget.value,
                })
              }
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
