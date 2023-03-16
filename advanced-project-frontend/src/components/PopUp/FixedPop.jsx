import axios from "axios";
import React, { useState, useEffect } from "react";
import '../../styles/RecurringPop.css';
import CloseButton from '../PopUp/CloseButton';


const Add = ({ onClick }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    amount: 0,
    category_id: 0,
    key_id: "",
    is_paid: false,
    type: "exp",
    scheduled_date: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addFixed = (e) => {
    e.preventDefault();
    const datetime = new Date(data.scheduled_date);
    const year = datetime.getFullYear();
    const month = datetime.getMonth() + 1;
    const day = datetime.getDate();
    const time = datetime.toLocaleTimeString();
    const date_time = year + "-" + month + "-" + day + " " + time;
    const newData = { ...data, date_time };
    axios
      .post("http://127.0.0.1:8000/api/fixed", newData)
      .then((response) => {
        console.log(response);
        if (onClick) onClick();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p className="animated-text">Add New Fixed</p>
      <form onSubmit={addFixed}>
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
          {data.type === "exp" ? (
            <input
              type="number"
              name="amount"
              value={data.amount}
              onChange={handleChange}
            />
          ) : (
            <input
              type="number"
              name="amount"
              value={-1 * data.amount}
              onChange={handleChange}
            />
          )}
        </label>
        <label>
          Category ID:
          <input
            type="number"
            name="category_id"
            value={data.category_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Key ID:
          <input
            type="text"
            name="key_id"
            value={data.key_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Is Paid:
          <input
            type="checkbox"
            name="is_paid"
            checked={data.is_paid}
            onChange={() => setData({ ...data, is_paid: !data.is_paid })}
          />
        </label>
        <label>
          Type (inc/exp):
          <input
            type="text"
            name="type"
            value={data.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Scheduled Date (YYYY-MM-DD hh:mm:ss):
          <input
            type="text"
            name="scheduled_date"
            value={data.scheduled_date}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
        <button class="close-btn" type="button" onClick={onClick}>X</button>
      </form>
    </div>
  );
};

export default Add;