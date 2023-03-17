
import axios from "axios";
import React, { useState, useEffect } from "react";
import '../../styles/RecurringPopEX.css';
// import CloseButton from '../PopUp/CloseButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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

  // const addRecurring = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://127.0.0.1:8000/api/reccurings", data)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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

const addRecurring = (e) => {
  e.preventDefault();
  axios
    .post("http://127.0.0.1:8000/api/reccurings", data)
    .then((response) => {
      console.log(response);
      toast.success("New recurring item added successfully!");
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error adding new recurring item.");
    });
};

  return (
        <div>
          <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
      <p className="animated-text">Add New Recurring</p>
      
      <form onSubmit={addRecurring} className='ContainerReccurinPop' >
        <label className="labelReccuringPop">
          Title:
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className='inputAddReccu'
          />
        </label>
        <label className="labelReccuringPop">
          Description:
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            className='inputAddReccu'

          />
        </label>
        <label className="labelReccuringPop">
          Amount:
          {/* {data.type === "exp" ? ( */}
            <input
              type="number"
              name="amount"
              value={data.amount}
            className='inputAddReccu'
            onChange={handleChange}
            />
          {/* ) : ( */}
            {/* <input
              type="number"
              name="amount"
              value={-1 * data.amount}
              onChange={handleChange}
            /> */}
          {/* )} */}
        </label>
        <label className="labelReccuringPop">
          Type:
          <input
            type="text"
            name="type"
            value={data.type}
            className='inputAddReccu'
            onChange={handleChange} readOnly
          />
          
        </label>   
        <label className="labelReccuringPop">
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
        <label className="labelReccuringPop">
          Start Date:
          <input
            type="date"
            name="start_date"
            value={data.start_dateReccuringPop}
            onChange={handleChange}
            className='inputAddReccu'
          />
        </label>
        <label className="labelReccuringPop">
          End Date:
          <input
            type="date"
            name="end_date"
            value={data.end_date}
            onChange={handleChange}
            className='inputAddReccu'
          />
        </label>
        <button type="submit" className="buttonReccuringPop">Add</button>
        <button className="close-btn" type="button" onClick={HandleOnclick}>X</button>

      </form>
    </div>
  );
};

export default Add;