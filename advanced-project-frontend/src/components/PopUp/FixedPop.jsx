import axios from "axios";
import React, { useState, useEffect } from "react";
import '../../styles/FixedPopEX.css';
// import CloseButton from '../PopUp/CloseButton';


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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then((response) => {
        setCategories(response.data.data);
  console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const [Fixedkeys, setFixedkeys] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Fixedkeys/show")
      .then((response) => {
        setFixedkeys(response.data.data.data);
  console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="animated-text">Add New Fixed</h1>
      <form onSubmit={addFixed} className='ContainerFixedPop'>
        <label className="labelFixedPop">
          Title:
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="inputAddFixed"
          />
        </label>
        <label className="labelFixedPop">
          Description:
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            className="inputAddFixed"
          />
        </label>
        <label className="labelFixedPop">
          Amount:
          
            <input
              type="number"
              name="amount"
              value={data.amount}
              onChange={handleChange}
              className="inputAddFixed"
            />
         
        </label>
        <label className="labelFixedPop">
            Categories:
           <select  className="selectReccuring" name="category_id" value={data.category_id} onChange={handleChange}>
             <option value="">Select a category</option>
             {categories.map((category) => (
               <option key={category.id} value={category.id}>
                 {category.name}
               </option>
             ))}
     </select>
     </label>



     <label className="labelFixedPop">
     Key ID:
           <select  className="inputAddFixed" name="Fixedkeys_id" value={data.Fixedkeys_id} onChange={handleChange}>
             <option value="">Select a key</option>
             {Fixedkeys.map((Fixedkeys) => (
               <option key={Fixedkeys.id} value={Fixedkeys.id}>
                 {Fixedkeys.name}
               </option>
             ))}
     </select>
     </label>
        {/* <label className="labelFixedPop">
          Key ID:
          <input
            type="text"
            name="key_id"
            value={data.key_id}
            onChange={handleChange}
            className="inputAddFixed"
          />
        </label> */}
        <label className="labelFixedPop">
          Is Paid?:
          <input
            type="checkbox"
            name="is_paid"
            // className="inputAddFixed"
            checked={data.is_paid}
            onChange={() => setData({ ...data, is_paid: !data.is_paid })}
            
          />
        </label>
        <label className="labelFixedPop">
          Type (exp):
          <input
            type="text"
            name="type"
            value={data.type}
            onChange={handleChange}
            className="inputAddFixed"
          />
        </label>
        <label className="labelFixedPop">
          Scheduled Date:
          <input
            type="text"
            name="scheduled_date"
            value={data.scheduled_date}
            onChange={handleChange}
            className="inputAddFixed"
          />
        </label>
        <button type="submit" className="buttonFixedPop">Add</button>
        <button class="close-btn" type="button" onClick={onClick}>X</button>
      </form>
    </div>
  );
};

export default Add;