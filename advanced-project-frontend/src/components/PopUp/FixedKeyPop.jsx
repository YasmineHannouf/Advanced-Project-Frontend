import "../../styles/FixedKeyADD.css";
import axios from "axios";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ConfirmationDialog from "../PopUp/confirm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AddFk = (props, onClick) => {
  const [data, setData] = useState({
    name: "",
    is_active: 0,
  });
  const HandleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? (checked ? 1 : 0) : value;
    setData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const HandleOnClick = () => {
    if (onClick) onClick();
  };
  // console.log(data);
  const addFixedKey = () => {
    console.log(data);

    axios
      .post("http://127.0.0.1:8000/api/Fixedkeys/store", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success("Data Added successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.Error);
      });
  };

  const { open, handleClose, onChildClose } = props;

  const handleSaveClick = () => {
    handleClose();
    onChildClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>Add New Key to a Category</DialogTitle>
        <DialogContent>
          <form onMouseEnter={addFixedKey}>
            <label>
              The Key Of The Category
              <input
                type="text"
                name="name"
                onChange={HandleChange}
                className="subscribe-input"
                placeholder="Typing Here..."
              />
            </label>
            <label class="switch">
              Active Status
              <input
                class="chk"
                type="checkbox"
                name="is_active"
                onChange={HandleChange}
              />
              <span class="slider"></span>
            </label>
            <br />
            <div></div>
          </form>{" "}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              addFixedKey();
              handleClose();
              HandleOnClick();
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </>
  );
};

export default AddFk;
