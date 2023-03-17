import axios from "axios";
import AdminCard from "./AdminCard";
import React, { useEffect, useState } from "react";
import "../../styles/Admin.css";
import Add from "../../assets/add.svg";
import AddAdmin from '../Admin/AddAdmin';


function Admin() {
  const [Admin, setAdmin] = useState([]);
  const [adminForm, setAdminForm] = useState(false);
  const [error, setError] = useState([]);
    useEffect(() => {
    getData();
   console.log(Admin)}, []);
  const getData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/admins");
      console.log(response.data.data.data);
      setAdmin(response.data.data.data);
      
    } catch (error) {
      console.error(error.response.data.message);
      setError({err:true, mess:error.response.data.message});
    }
  };
  console.log(error.mess);
  return (
    <div className="AdminContainer">
      <div className="headerContenet">
        <h1>Manage Admins</h1><br/>
        {error.err  &&( <h2 style={{color:'gray', marginTop:'400px',fontSize:'xx-large',position:'absolute'}}>{error.mess}</h2>)}; 
    
      <button className="cta"  onClick={() => {
            setAdminForm(!adminForm);
          }}>
          <span>Add New</span>
          <img src={Add} alt="" />
        </button>
      </div>
      <div className="AdminParent">
        {Admin.map((items) => (
          <div className="card-div">
            {" "}
            <AdminCard Admin={items} className="CardAdmin" handleReload={getData}/>{" "}
          </div>
        ))}
       <AddAdmin open={adminForm} onClose={() => {
            setAdminForm(!adminForm); 
          }} handleReload={getData}></AddAdmin>
      </div>
      
    </div>
  );
}

export default Admin;
