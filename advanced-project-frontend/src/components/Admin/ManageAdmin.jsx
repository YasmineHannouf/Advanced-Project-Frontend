import axios from "axios";
import AdminCard from './AdminCard'
import React, { useEffect, useState } from "react";
import '../../styles/Admin.css';

import { ClassNames } from "@emotion/react";
function Admin() {
  const [Admin, setAdmin] = useState([]);
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
  console.log('hhhh'+Admin)
  return <div className="AdminContainer">
  <h1>Admin</h1>
<div   className="AdminParent">

{Admin.map((items) =><div className="card-div"> <AdminCard Admin={items} className="CardAdmin"/> </div>)}

</div>
</div>;

}

export default Admin;
