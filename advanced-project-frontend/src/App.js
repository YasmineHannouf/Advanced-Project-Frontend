import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Dashboard from "./pages/Dashboard";
import Incomes from "./components/Incomes";
import RecurringIncome from "./components/RecurringIncome";
import FixedIncomes from "./components/FixedIncomes";
import Login from "./pages/SignIn";
import Expenses from "./components/Expenses";
import SideBar from "./components/SideBar";
import Categories from "./components/Categories";
import Additionals from "./components/Additionals";
import FixedKey from "./components/Fixed_Key";
import useToken from '../src/components/userToken';


function App(){

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}


function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


  const token = getToken();
  
    return (
    <BrowserRouter>
    <div style={{ display: 'flex', gridColumn: '1/-1' }}>
      <SideBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/incomes/recurring" element={<RecurringIncome />} />
        <Route path="/incomes/fixing" element={<FixedIncomes />} />

        <Route path="/expenses" element={<Expenses />} />
        <Route path="/expenses/recurring" element={<RecurringIncome />} />
        <Route path="/expenses/fixing" element={<FixedIncomes />} />

        <Route path="/add" element={<Additionals />} />
        <Route path="/add/categories" element={<Categories />} />
        <Route path="/add/fixedkey" element={<FixedKey />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      {/* <Incomes></Incomes> */}

    </div>
  </BrowserRouter>
  );
};

export default App;
