import React from 'react';
import { Typography, Paper, Avatar } from '@mui/material';
import '../../styles/profile.css';
const UserInfo = ({ name, email, tel, isSuper, image }) => {
  return (
    <Paper sx={{ p: 20 }}>
      <Avatar src={image} sx={{ width: 100, height: 100 }} />
      <Typography variant="h5">SAea</Typography>
      <Typography variant="body1">ghjjjhfd</Typography>
      <Typography variant="body1">zxcvbnm</Typography>
      <Typography variant="body1">'Super User'</Typography>
    </Paper>
  );
};

export default UserInfo;
