
import axios from "axios";
import React, { useState, useEffect } from "react";
import '../../styles/RecurringPop.css';
// import CloseButton from '../PopUp/CloseButton';


const Add = ({ onClick }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    amount: 0,
    category_id: 0,
    type: "exp",
    start_date: "",
    end_date: ""
  });
const HandleOnclick = () => {
  if (onClick) onClick();
}
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addRecurring = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/reccurings", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p className="animated-text">Add New Recurring</p>
      <form onSubmit={addRecurring} className='' >
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          {/* {data.type === "exp" ? ( */}
            <input
              type="number"
              name="amount"
              value={data.amount}
              onChange={handleChange}
            />
          {/* ) : ( */}
            <input
              type="number"
              name="amount"
              value={-1 * data.amount}
              onChange={handleChange}
            />
          {/* )} */}
        </label>
        <label>
          {/* Type (inc/exp):
          <input
            type="text"
            name="type"
            value={data.type}
            onChange={handleChange}
          /> */}
        </label>   
         <label>
          Categories
          
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="start_date"
            value={data.start_date}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="end_date"
            value={data.end_date}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
        <button class="close-btn" type="button" onClick={HandleOnclick}>X</button>
      </form>
    </div>
  );
};

export default Add;