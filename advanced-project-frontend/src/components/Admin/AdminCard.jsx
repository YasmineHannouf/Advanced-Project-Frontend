import React, { useEffect, useState } from "react";
import emailIcon from "../../assets/Email.svg";
import phoneIcon from "../../assets/Phone.svg";
import DeleteIcon from "../PopUp/Delete";
import "../../styles/AdminCard.css";
import { ButtonGroup, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function AdminCard(props) {
  const handelDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/admins/${props.Admin.id}`);
      toast.success("Admin deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateStatus = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/admins/${props.Admin.id}`,
        { is_super: !props.Admin.is_super, _method: "PATCH" }
      );
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.log(error.response.data.message);
      // Handle error
    }
  };

  return (
    <section className="ContanerCard">
      <div className="card">
        <div className="card-top-part">
          <div className="left-part">
            <div className="user-name">
            <ButtonGroup>
                <Button
                  color="error"
                  variant="contained"
                  size="meduim"
                  className="Deletebtn"
                  onClick={handelDelete}
                >
                  Delete
                </Button>
                {props.Admin.is_super ? (
                  <Button
                    color="secondary"
                    variant="contained"
                    size="medium"
                    className="update-status-button"
                    onClick={handleUpdateStatus}
                  >
                    Make Admin
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    variant="contained"
                    size="medium"
                    className="update-status-button"
                    onClick={handleUpdateStatus}
                  >
                    Make Super 
                  </Button>
                )}
              </ButtonGroup>
              <p className="name">{props.Admin.name}</p>
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
      <ToastContainer />
    </section>
  );
}

export default AdminCard;
