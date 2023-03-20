import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function isAuthenticated() {
  const authToken = Cookies.get('Authorisation');
  console.log(authToken);

  return !!authToken;
}
