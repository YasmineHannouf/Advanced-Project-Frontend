import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Incomes from './components/Incomes';
import RecurringIncome from './components/RecurringIncome';
import FixedIncomes from './components/FixedIncomes';
import SignIn from './pages/SignIn';
import Expenses from './components/Expenses';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route path="/incomes" element={<Incomes />}>
						{/* <Route
							path="/recurring"
							element={<RecurringIncome />}
						/> */}
						{/* <Route path="/fixing" element={<FixedIncomes />} /> */}
					</Route>

					{/* <Route path="/expenses" element={<Expenses />}>
						<Route
							path="/recurring"
							element={<RecurringIncome />}
						/>
						{/* <Route path="/fixing" element={<FixedIncomes />} /> 
					</Route>*/}
				</Route> 
				<Route path="/login" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
