import React, { useState,useEffect } from 'react';
import '../styles/Profile.css';
import axios from 'axios';
const ProfileInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [tel, setTel] = useState('555-555-5555');
  const [email, setEmail] = useState('johndoe@email.com');
  const [image, setImage] = useState('https://via.placeholder.com/150');
  const [data, setData] = useState({
    name:"",
    email: "",
    tel:"",
    image:"",
});




  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
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
      <input type="text" id="imageInput" name="image" value={data.image} onChange={handleInputChange} />

      <label htmlFor="nameInput">Name:</label>
      <input type="text" id="nameInput" name="name" value={data.name} onChange={handleInputChange} />

      <label htmlFor="telInput">Phone:</label>
      <input type="text" id="telInput" name="tel" value={data.tel} onChange={handleInputChange} />

      <label htmlFor="emailInput">Email:</label>
      <input type="text" id="emailInput" name="email" value={data.email} onChange={handleInputChange} />

      {/* <label htmlFor="addressInput">Address:</label>
      <input type="text" id="addressInput" name="address" value={address} onChange={handleInputChange} /> */}

      <button onClick={handleSaveClick}>Save</button>
    </div>
  );

  const renderViewMode = () => (
    <div>
      <div className='imageandbutton'>
      <h2>Personal Information</h2>
      <img src={image} alt="Profile" />
      <br />
      <input type="file" className="buttonDownload" name="imageUpload" onChange={handleImageUpload} />
      </div>
      <div className='cardinfo'>
      <p>Name: {data.name}</p>
      <p>Phone: {data.tel}</p>
      <p>Email: {data.email}</p>
      {/* <p>Address: {address}</p> */}

      
      <button onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  );

  return <div className='profile-info-container'>{isEditing ? renderEditMode() : renderViewMode()}</div>;
};

export default ProfileInfo;