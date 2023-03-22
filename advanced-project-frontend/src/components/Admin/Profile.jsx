import React from 'react';
import { Typography, Paper, Avatar } from '@mui/material';

const UserInfo = ({ name, email, tel, isSuper, image }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Avatar src={image} sx={{ width: 100, height: 100 }} />
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{email}</Typography>
      <Typography variant="body1">{tel}</Typography>
      <Typography variant="body1">{isSuper ? 'Super User' : 'Regular User'}</Typography>
    </Paper>
  );
};

export default UserInfo;
