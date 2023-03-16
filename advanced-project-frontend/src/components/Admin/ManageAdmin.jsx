import axios from "axios";
import AdminCard from "./AdminCard";
import React, { useEffect, useState } from "react";
import "../../styles/Admin.css";
import Add from "../../assets/add.svg";
import AddAdmin from '../Admin/AddAdmin';

function Admin() {
  const [Admin, setAdmin] = useState([]);
  const [adminForm, setAdminForm] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/admins");
      console.log(response.data.data.data);
      setAdmin(response.data.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="AdminContainer">
      <div className="headerContenet">
        <h1>Manage Admins</h1>
    
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
            <AdminCard Admin={items} className="CardAdmin" />{" "}
          </div>
        ))}
       <AddAdmin open={adminForm} onClose={() => {
            setAdminForm(!adminForm);
          }}></AddAdmin>
      </div>
    </div>
  );
}

export default Admin;
