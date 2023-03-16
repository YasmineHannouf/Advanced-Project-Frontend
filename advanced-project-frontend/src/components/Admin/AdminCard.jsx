import React, { useState } from "react";
import emailIcon from "../../assets/Email.svg";
import phoneIcon from "../../assets/Phone.svg";
import DeleteIcon from "../PopUp/Delete";
import "../../styles/AdminCard.css";
import { ButtonGroup, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function AdminCard(props) {
  // const [data, props] = useState(props);
  const [booleans, setBoolean] = useState({
    editPhoto: false,
    editForm: false,
  });
  const [isSuperAdmin, setIsSuperAdmin] = useState(props.is_super);
  const [showSuccess, setShowSuccess] = useState(false);
  const notify = () => toast("Wow so easy!");

  const toggleAdmin = () => {
    setIsSuperAdmin(!isSuperAdmin);
  };
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
  };
  const handleEditPhoto = () => {
    setBoolean({ ...booleans, editPhoto: !booleans.editPhoto });
  };

  const handleEditForm = () => {
    setBoolean({ ...booleans, editForm: !booleans.editForm });
  };

  const handelDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/admins/${props.Admin.id}`);
      setShowSuccess(true);

    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <section className="ContanerCard">
      {!booleans.editForm && (
        <div className="card">
          <div className="card-top-part">
            <div className="left-part">
              <div className="user-name">
                <ButtonGroup><Button
                  color="error"
                  // variant="outlined"
                  variant="contained"
                  size="meduim"
                  className="Deletebtn"
                  onClick={handelDelete}
                >
                  Delete
                </Button>

                  <Button
                    color="warning"
                    variant="contained"
                    size="medium"
                    className="superButton"
                    onClick={toggleAdmin}
                    disabled={!props.Admin.is_super}
                  >
                    Super 
                  </Button></ButtonGroup>
                  <p className="name">{props.name}</p>
                  <p
                    className={`role ${
                      props.Admin.is_super ? "super-admin" : "admin"
                    }`}
                  >
                    {props.Admin.is_super ? "Super Admin" : "Admin"}
                  </p>
                
              </div>
            </div>
            <div className="right-part">
              <div className="user-photo">
                <img
                  className="profile"
                  src={`http://127.0.0.1:8000/storage/images/${props.Admin.image}`}
                  alt="Example Image"
                />
              </div>
            </div>
          </div>
          <div className="card-bottom-part">
            <div className="bottom-part">
              <a href={`mailto:${props.Admin.email}`} className="link">
                <span className="icon">
                  <img src={emailIcon} alt="Email icon" className="img" />
                </span>
                Email
              </a>
            </div>
            <div className="bottom-part">
              <a href="tel:0123456789" className="link">
                <span className="icon">
                  <img src={phoneIcon} alt="Phone icon" />
                </span>
                Phone
              </a>
            </div>
          </div>
        </div>
      )}
        
    </section>
    
  );
}

export default AdminCard;
