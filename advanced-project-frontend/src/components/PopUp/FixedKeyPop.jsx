import React, { useState, useEffect } from "react";
import "../../styles/FixedKeyADD.css";
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
  const addFixedKey =
    () => {
      axios
        .post("http://127.0.0.1:8000/api/Fixedkeys/store", data)
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
      <form onSubmit={addFixedKey}>
        <label>
          <input
            type="text"
            name="name"
            onChange={HandleChange}
            className="subscribe-input"
            placeholder="Name Of the new Fixed-Key"
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
        <div className="submit-btn" onClick={addFixedKey}>Add</div>
      </form>
    </div>
  );
}

export default Add;
{
  /* */
}
