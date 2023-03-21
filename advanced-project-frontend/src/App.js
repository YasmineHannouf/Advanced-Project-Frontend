import FixedKey from "./components/Fixed_Key";
import DashHome from "./components/DashHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Incomes from "./components/Incomes";
import ExpensesReccuring from "./components/TableExpensesRecc";
import ExpensesFixed from "./components/TableExpensesFixed";
import FixedIncomes from "./components/FixedIncomes";
import SignIn from "./pages/SignIn";
import Expenses from "./components/Expenses";
import SideBar from "./components/SideBar";
import Admin from "./components/Admin/ManageAdmin";
import Categories from "./components/Categories";
import Additionals from "./components/Additionals";

import Setting from "../src/components/Admin/Setting";
import { useState } from "react";
const App = () => {
  const [isSuper,SetSuper]=useState(false);
  return (
    <BrowserRouter>
    <div style={{ display: "flex", gridColumn: "1/-1" }}>
      <SideBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route
          path="/home"
          element={<PrivateRoute element={<DashHome />} />}
        />
        <Route
        path="/incomes"
        element={<PrivateRoute element={<Incomes />} />}
      />
      <Route
      path="/expenses"
      element={<PrivateRoute element={<Expenses/>} />}
    />
     <Route
      path="/goals"
      element={<PrivateRoute element={<Profit/>} />}
    />
       <Route
      path="/additionals"
      element={<PrivateRoute element={<Categories/>} />}
    />  
      <Route
    path="/additionals/category"
    element={<PrivateRoute element={<Categories/>} />}
  />
      <Route
    path="/additionals/fixedkey"
    element={<PrivateRoute element={<FixedKey/>} />}
  />
      </Routes>
      
    </div>
  </BrowserRouter>
  );
};

export default App;
