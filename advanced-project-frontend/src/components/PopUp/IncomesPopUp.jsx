import React, { useState, useEffect } from "react";
import "../../styles/IncomesADD.css";
import axios from "axios";

function Add() {
  const [data, setData] = useState({
    name: "",
    is_active: 0,
  });
  const HandleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? (checked ? 1 : 0) : value;
    setData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  console.log(data);
  const addIncomes=
    () => {
      axios
        .post("http://127.0.0.1:8000/api/Icomes/store", data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          // setIsLoading(false);
        });
    };

  return (
    <div className="AddForm">
      <p>Add New </p>
      <form onSubmit={addIncomes}>
        <label>
          <input
            type="text"
            name="name"
            onChange={HandleChange}
            className="subscribe-input"
            placeholder="Name Of the new Incomes"
          />
        </label>
        <br />
        <label class="switch">
          <input
            class="chk"
            type="checkbox"
            name="is_active"
            onChange={HandleChange}
          />
          <span class="slider"></span>
        </label>
        <div className="submit-btn" onClick={addIncomes}>Add</div>
      </form>
    </div>
  );
}

export default Add;
{
  /* */
}
