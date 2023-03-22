import React, { useState,useEffect } from 'react';
import '../../../src/styles/profile.css';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProfileInfo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditImage, setEditImage] = useState(false);
  const [name, setName] = useState(props.res.name);
  const [tel, setTel] = useState(props.res.tel);
  const [email, setEmail] = useState(props.res.email);
  const [image, setImage] = useState();
  const [password, setPassword] = useState(null);
  const [data, setData] = useState({
    name:props.res.name,
    email: props.res.email,
    tel:props.res.tel,
    image:props.res.image,
    password:'',
});


const handleCancelClick = () => {
  setIsEditing(false);
};

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    const updatedData = {
      name: name,
      tel: tel,
      email: email,
      password: password,
    };
  
    const formData = new FormData();
    formData.append('image', image); // image is a File object obtained from an input field
  
    for (let key in updatedData) {
      formData.append(key, updatedData[key]);
    }
  
    axios.patch(`http://127.0.0.1:8000/api/admins/${props.res.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      toast.success("Data deleted successfully");
      console.log(response.data);
    })
    .catch((error) => {
      toast.error(error);
      console.log(error);
    });
  };
  
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'tel':
        setTel(value);
        break;
        case 'email':
          setEmail(value);
          break;
          
          case 'password':
          setPassword(value);
          break;
    
      case 'image':
        setImage(value);
        break;
      default:
        break;
    }
  };



  const renderEditMode = () => (
    <div>
      <label htmlFor="imageInput">Profile Picture:</label>
      <input type="file" className="buttonDownload" name="image" onChange={()=>{handleInputChange(); handleImageUpload();}} value={props.res.image}/>

      <label htmlFor="nameInput">Name:</label>
      <input type="text" id="nameInput" name="name" value={name} onChange={handleInputChange} />
      <label htmlFor="telInput">Phone:</label>
      <input type="text" id="telInput" name="tel" value={tel} onChange={handleInputChange} />

      <label htmlFor="emailInput">Email:</label>
      <input type="text" id="emailInput" name="email" value={email} onChange={handleInputChange} />

      <label htmlFor="emailInput">Password:</label>
      <input type="password" id="password" name="email" value={password} onChange={handleInputChange} />


      {/* <label htmlFor="addressInput">Address:</label>
      <input type="text" id="addressInput" name="address" value={address} onChange={handleInputChange} /> */}

      <button onClick={handleSaveClick}>Save</button>
      <button onClick={handleCancelClick}>Back</button>
    </div>
  );

  const renderViewMode = () => (
    <div>
      <div className='imageandbutton'>
      <h2>Personal Information</h2>
      <img src={`http://127.0.0.1:8000/storage/images/${props.img}`}/>
            <br />
{ isEditImage &&
      <input type="file" className="buttonDownload" name="imageUpload" onChange={handleImageUpload} />

}      </div>
      <div className='cardinfo'>
      <p>Name: {name}</p>
      <p>Phone: {tel}</p>
      <p>Email: {email}</p>

      
      <button onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );

  return <div className='profile-info-container'style={{ display: "flex", gridColumn: "1/-1" }}>{isEditing ? renderEditMode() : renderViewMode()}       <ToastContainer />
  </div>;
};

export default ProfileInfo;