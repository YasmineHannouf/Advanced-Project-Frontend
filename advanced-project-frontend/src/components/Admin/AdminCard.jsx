import React, { useState } from "react";
import emailIcon from "../../assets/Email.svg";
import phoneIcon from "../../assets/Phone.svg";
import DeleteIcon from "../PopUp/Delete";
import "../../styles/AdminCard.css";
import { ButtonGroup, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdminCard(props) {
  // const [data, props] = useState(props);
  const [booleans, setBoolean] = useState({
    editPhoto: false,
    editForm: false,
  });
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
  return (
    <>
      {!booleans.editForm && (
        <div className="card">
          <div className="card-top-part">
            <div className="left-part">
              <div className="user-name">
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
                <button className="Editbtn" onClick={handleEditPhoto}>
                  <FontAwesomeIcon
                    icon="fas fa-edit"
                    className="Editbtn"
                    color="#234567"
                  />{" "}
                </button>
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
            <div className="bottom-part">
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  color="error"
                  variant="outlined"
                  size="small"
                  startIcon
                  className="Editbtn"
                  onClick={handleEditForm}
                >
                  <FontAwesomeIcon
                    icon="fas fa-edit"
                    className="Editbtn"
                    color="#234567"
                  />
                </Button>
                <Button
                  color="warning"
                  variant="outlined"
                  size="small"
                  startIcon
                  className="Deletebtn"
                >
                  <DeleteIcon />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      )}
      {booleans.editPhoto && (
        <form className="modal">
          <span className="close" onClick={handleEditPhoto}>
            X
          </span>
          <div className="content">
            <span className="title">Upload a File</span>
            <p className="message">
              Select a file to upload from your computer or device.
            </p>
            <div className="actions">
              <label htmlFor="file" className="button upload-btn">
                Choose File
                <input
                  hidden
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="result">
              <div className="file-uploaded">
                <p>{fileName}</p>
              </div>
            </div>
          </div>
        </form>
      )}

      {booleans.editForm && (
        <div className="card-Edit">
          <div className="card-top-part">
            <div className="left-part">
              <div className="user-name">
                <label htmlFor="name" className="">
                  Enter New Name:
                  <input
                    name="name"
                    value={props.Admin.name}
                    id="name"
                    className=""
                  ></input>
                </label>
                <label htmlFor="email">
                  Email: 
                  <input type="email" value={props.Admin.email} name='email' id="email"/>
                </label>
                <label htmlFor="tel">
                  Telephone:
                  <input type="tel" value={props.Admin.email} name='tel'  />
                </label>
                {/* <p
                  className={`role ${
                    props.Admin.is_super ? "super-admin" : "admin"
                  }`}
                >
                  {props.Admin.is_super ? "Super Admin" : "Admin"}
                </p> */}
              </div>
            </div>
            <div className="right-part"></div>
          </div>
          <div className="card-bottom-part">
            <div className="bottom-part">
              {/* <a href={`mailto:${props.Admin.email}`} className="link">
              <span className="icon">
                <img src={emailIcon} alt="Email icon" className="img" />
              </span>
              Email
            </a> */}
            </div>
            <div className="bottom-part">
              <a href="tel:${}" className="link">
                <span className="icon">
                  <img src={phoneIcon} alt="Phone icon" />
                </span>
                Phone
              </a>
            </div>
            <div className="bottom-part">
              <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                color="error"
                variant="outlined"
                size="small"
                startIcon
                className="Editbtn"
              >
                Save
              </Button>
              <Button
                color="error"
                variant="outlined"
                size="small"
                startIcon
                onClick={handleEditForm}
              >
                Cancel
              </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminCard;
