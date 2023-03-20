import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import PrivateRoute from "./components/auth/ProtectedRoute";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", gridColumn: "1/-1" }}>
        <SideBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dash"
            element={<PrivateRoute element={<Dashboard />} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
