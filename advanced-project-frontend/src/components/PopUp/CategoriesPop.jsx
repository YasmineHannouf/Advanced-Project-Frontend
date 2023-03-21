import "../../styles/FixedKeyADD.css";
import axios from "axios";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AddCategoryDialog = (props, onClick) => {
  const [data, setData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setData({ ...data, name: e.target.value });
  };

  const addCategories = () => {
    axios
      .post("http://127.0.0.1:8000/api/categories", { name: data.name })
      .then((response) => {
        if (response.status === 200) {
          toast.success("New Category added successfully!");
        }
      })
      .catch((error) => {
        console.log(error.response.data.Error);
        toast.error(error.response.data.Error);

      });
  };

  const { open, handleClose, onChildClose } = props;

  const handleSaveClick = () => {
    addCategories();
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
          <form onSubmit={addCategories}>
            <label>
              The New Of The Category
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="subscribe-input"
                placeholder="Typing Here..."
              />
            </label>
            <br />
            <div></div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveClick}>Save</Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </>
  );
};

export default AddCategoryDialog;
