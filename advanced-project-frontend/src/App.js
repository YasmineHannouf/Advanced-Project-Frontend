import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import DashHome from "./components/DashHome";
import Incomes from "./components/Incomes";
import Expenses from "./components/Expenses";
import Profit from "./components/TargetGoal";
import Categories from "./components/Categories";
import FixedKey from "./components/Fixed_Key";
import SideBar from "./components/SideBar";
import Admins from "../src/components/Admin/ManageAdmin";
import PrivateRoute from "./components/auth/ProtectedRoute";
export const context = React.createContext();

const App = () => {
  const [sideExpanded, setSideExpanded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState();
  const [img, setImg] = useState();
  const [adminName, setAdminName] = useState();
  const handleLogin = (response) => {
    setIsAuthenticated(true);
    console.log("Login response:", response);
    setIsAdmin(response.data.admin.is_super);
    setAdminName(response.data.admin.name);
    setImg(response.data.admin.image);
    console.log("Admin response:", response.data.admin.is_super);
  };
  const handleLogOut = (response) => {
    setIsAuthenticated(response);
  };

  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <context.Provider value={[sideExpanded, setSideExpanded]}>
        {isAuthenticated ? (
          <div style={{ display: "flex", gridColumn: "1/-1" }}>
            <SideBar
              name={adminName}
              status={isAdmin}
              handleLogOut={handleLogOut}
              img={img}
            />
            <Routes>
              <Route
                path="/dashboard"
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
                element={<PrivateRoute element={<Expenses />} />}
              />
              <Route
                path="/goals"
                element={<PrivateRoute element={<Profit />} />}
              />

              <Route
                path="additional/Category"
                element={<PrivateRoute element={<Categories />} />}
              />
              <Route
                path="additional/fixedkey"
                element={<PrivateRoute element={<FixedKey />} />}
              />
              {!!isAdmin && (
                <Route
                  path="/manageadmin"
                  element={<PrivateRoute element={<Admins />} />}
                />
              )}
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Login handleLogin={handleLogin} />} />
          </Routes>
        )}
      </context.Provider>

    </BrowserRouter>
  );
};

export default App;
