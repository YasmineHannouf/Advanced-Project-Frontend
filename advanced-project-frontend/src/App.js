import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Incomes from "./components/Incomes";
import RecurringIncome from "./components/RecurringIncome";
import FixedIncomes from "./components/FixedIncomes";
import SignIn from "./pages/SignIn";
import Expenses from "./components/Expenses";
import SideBar from "./components/SideBar";
import DashHeader from "./components/DashHeader";
import Categories from "./components/Categories";
import Additionals from "./components/Additionals";

const App = () => {
  return (
    <BrowserRouter>
      <DashHeader />

      <SideBar />

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
        <Route path="/add/fixing" element={<FixedIncomes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
