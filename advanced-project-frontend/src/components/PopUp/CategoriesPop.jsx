import React, { useState, useEffect } from "react";
import "../../styles/FixedKeyADD.css";
import axios from "axios";

const Add = ({ onClick })=> {
  const [data, setData] = useState({
    name: "",
  });
  const HandleChange = (e) => {
    setData(e.target.name =e.target.value);
  };
  const handleOnClick = () => {
    if (onClick) onClick();
  };
  console.log(data);
  const addCategories =
    () => {
  console.log(data);
      
      axios
        .post("http://127.0.0.1:8000/api/categories", {name: data})
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          // setIsLoading(false);
        });
    };
    // onClick={handleOnClick}
  return (
    <div className="AddForm">
      <p>Add New </p>
      <form onSubmit={addCategories}>
        <label>
          <input
            type="text"
            name="name"
            onChange={HandleChange}
            className="subscribe-input"
            placeholder="Add a new category Name"
          />
        </label>
        <br />
        <div className="submit-btn" onClick={addCategories}>Add</div>
      </form>
    </div>
  );
}

export default Add;
{
  /* */
}
