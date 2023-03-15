import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Incomes from "./components/Incomes";
import RecurringIncome from "./components/RecurringIncome";
import FixedIncomes from "./components/FixedIncomes";
import SignIn from "./pages/SignIn";
import Expenses from "./components/Expenses";
import SideBar from "./components/SideBar";
import Categories from "./components/Categories";
import Additionals from "./components/Additionals";
import FixedKey from "./components/Fixed_Key";
import './styles/container.css';

const App = () => {
  return (
    <BrowserRouter>
    <div className="container">
      <SideBar />
      <div className="pageWrapper">
      <Routes>
        <Route path="/login" element={<SignIn />} />
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
      </Routes>
      {/* <SignIn></SignIn> */}
      </div>
    </div>
  </BrowserRouter>
  );
};

export default App;
