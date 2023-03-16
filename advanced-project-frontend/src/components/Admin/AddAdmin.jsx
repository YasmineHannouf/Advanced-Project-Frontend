import React, { useState } from "react";
import axios from "axios";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AddAdminDialog(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    image: null,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  function handleCheckboxChange(event) {
    setIsSuper(event.target.checked ? 1 : 0);
  }

  const handleImageChange = (e) => {
    setData({ ...data, image: e.target.files[0] });
  };
  const [isSuper, setIsSuper] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const addAdmin = () => {
    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("tel", data.tel);
    formData.append("is_super", isSuper);
    if (data.image) {
      formData.append("image", data.image, data.image.name);
    }
    axios
      .post("http://127.0.0.1:8000/api/admins", formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success("Admin added successfully!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const { open, onClose, onChildClose } = props;

  const handleSaveClick = () => {
    onClose();
    onChildClose();
  };

  return (
    <>
     <Dialog
       open={open}
       onClose={onClose}
     TransitionComponent={Transition}
       maxWidth="md"
     >
     <DialogTitle>Add New Category</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Name"
            name="name"
             value={data.name}
            onChange={handleChange}
            fullWidth
             required
           />
           <TextField
             label="Email"
             name="email"
             value={data.email}
             onChange={handleChange}
            type="email"
            fullWidth
             required
           />
    <TextField
            label="Phone Number"
             name="tel"
             value={data.tel}
             onChange={handleChange}
             fullWidth
            required
           />
           <TextField
             label="Password"
             name="password"
           value={data.password}
             onChange={handleChange}
             type="password"
            fullWidth
             required
           />
            <label>
            Is Super:
            <input
              type="checkbox"
             name="is_super"
         onChange={handleCheckboxChange}
              className="subscribe-input"
            />
           </label>
           <TextField
            type="file"
            name="image"
            onChange={handleImageChange}
            fullWidth
            
           />
          <br />
         </form>
       </DialogContent>
     <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      <Button onClick={addAdmin}>Save</Button>
      </DialogActions>
    
    </Dialog>
  {showSuccess && (
        
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>     
    )}</>
  );
}
