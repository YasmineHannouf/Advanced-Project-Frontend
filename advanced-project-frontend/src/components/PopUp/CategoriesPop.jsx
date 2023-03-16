import "../../styles/FixedKeyADD.css";
import axios from "axios";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AddCategoryDialog(props) {
  const [data, setData] = useState({
    name: "",
  });
  const HandleChange = (e) => {
    setData((e.target.name = e.target.value));
  };
  // const handleOnClick = () => {
  //   if (onClick) onClick();
  // };
  console.log(data);
  const addCategories = () => {
    console.log(data);

    axios
      .post("http://127.0.0.1:8000/api/categories", { name: data })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { open, handleClose, onChildClose } = props;

  const handleSaveClick = () => {
    handleClose();
    onChildClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
      <DialogTitle>Add New Category</DialogTitle>
      <DialogContent>
        <form onMouseEnter={addCategories}>
          <label>
            <input
              type="text"
              name="name"
              onChange={HandleChange}
              className="subscribe-input"
              placeholder="Add a new category Name"
            />
          </label>
          <br />
          <div></div>
        </form>{" "}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            addCategories();
            handleClose();
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
