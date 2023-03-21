import React, { useEffect, useState } from "react";
import emailIcon from "../../assets/Email.svg";
import phoneIcon from "../../assets/Phone.svg";
import { ButtonGroup, Button, TextField } from "@mui/material";
import ConfirmationDialog from "../PopUp/confirm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/AdminCard.css";

import axios from "axios";

function AdminCard(props,onClick) {
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
        props.handleReload();

        toast.success("Admin Updated successfully!");

      
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  const HandleOnClick = () => {
    if (onClick) onClick();
  };
  return (
    <section className="ContanerCard">
      <div className="card">
        <div className="card-top-part">
          <div className="left-part">
            <div className="user-name">
              <ButtonGroup>
                <ConfirmationDialog
                  title="Delete Item"
                  buttonText="Delete"
                  confirmText="Yes, delete it"
                  cancelText="Cancel"
                  onConfirm={handelDelete}
                  color="error"
                  onError={(message) => toast.error(message)}
                >
                  Are you sure you want to delete this Admin?
                </ConfirmationDialog>

                {props.Admin.is_super ? (
                  <ConfirmationDialog
                    color="secondary"
                    className="update-status-button"
                    title={`Update Role Of ${props.Admin.name}`}
                    buttonText="Make Admin"
                    confirmText="Yes, Update it"
                    cancelText="Cancel"
                    onConfirm={()=>{handleUpdateStatus(); HandleOnClick();}}                    onError={(message) => toast.error(message)}
                  >
                    Are you sure you want Update this Admin?{" "}
                  </ConfirmationDialog>
                ) : (
                  <ConfirmationDialog
                  color="secondary"
                  className="update-status-button"
                  title={`Update Role Of ${props.Admin.name}`}
                  buttonText="Make Super "
                  confirmText="Yes, Update it"
                  cancelText="Cancel"
                  onConfirm={()=>{handleUpdateStatus(); HandleOnClick();}}
                  onError={(message) => toast.error(message)}
                >
                  Are you sure you want Update this Admin?{" "}
                </ConfirmationDialog>
                )}
              </ButtonGroup>
              <p ><strong>{props.Admin.name}</strong></p>
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
