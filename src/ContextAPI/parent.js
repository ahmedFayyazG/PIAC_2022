import React, { Component, useCallback, useContext, useState } from "react";
import ValueContext from "../ValueContext";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import { HistoryContext } from "./HistoryContext";

const Parent = () => {
  const { Transections, addTransection } = useContext(HistoryContext);
  const [Text, setText] = useState("");
  const [Amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Text);
    console.log(Amount);

    addTransection({
      Amount: Amount,
      Text: Text,
    });
    Transections.map((item, key) => {
      return console.log("Transections......." + item.Text);
    });
  };

  return (
    <>
      <Outline>
        <h1
          style={{
            textAlign: "center",
            color: "#74C7B8",
            fontFamily: "monospace",
          }}
        >
          Expense tracking
        </h1>
        <h5>Your Expense</h5>
        <h4>$300</h4>
        <br />
        <IncomeBox>
          <h2>
            Income
            <p style={{ color: "#519259", fontWeight: "bolder" }}>$200</p>
          </h2>
          <Divider orientation="vertical" flexItem />
          <h2>
            Expense
            <p style={{ color: "#EC255A", fontWeight: "bolder" }}>$500</p>
          </h2>
        </IncomeBox>
        <h5>History</h5>
        <HistoryBox>
          <Listings>
            {Transections.map((value, index) => {
              return (
                <ListItems key={index}>
                  <h4 style={{ textAlign: "center", padding: "9px" }}>
                    {value.Text}
                  </h4>
                  <h4 style={{ textAlign: "center", padding: "9px" }}>
                    ${value.Amount}
                  </h4>
                </ListItems>
              );
            })}
          </Listings>
        </HistoryBox>
        <h5>Add New Transection</h5>
        <form onSubmit={handleSubmit}>
          <label>Text</label>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <label>Amount</label>
          <input type="number" onChange={(e) => setAmount(e.target.value)} />

          <button
            type="submit"
            style={{
              width: "400px",
              height: "40px",
              background: "#81B214",
              color: "white",
              fontSize: "20px",
              borderRadius: "10px",
            }}
          >
            Submit
          </button>
        </form>
      </Outline>
    </>
  );
};

export default Parent;

const Outline = styled.div`
  height: 700px;
  width: 400px;

  background-color: #f8f8f8;
`;

const IncomeBox = styled.div`
  height: 100px;
  background: #f1f7e7;
  border-style: hidden;
  box-shadow: 4px 7px #cee5d0;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  padding-bottom: -30px;
  margin-bottom: 10px;
`;

const HistoryBox = styled.div`
  height: 120px;
  background: #faedf0;
  border-style: hidden;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
`;

const Listings = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListItems = styled.div`
  display: flex;
  height: 40px;
  border: 2px;
  background: #d1eaa3;
  border-radius: 10px;
  width: 400px;
  justify-content: space-around;
  margin: 1px;
`;
