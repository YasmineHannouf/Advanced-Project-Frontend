import React from 'react';
import '../styles/expensePage.css';
import IncomesImg from '../assets/Incomes.jpg';
import TabsIncomes from '../components/TabsIncomes';

const Incomes = () => {
	return (
		<div className='expensePage'>
			<h1>Welcome to your Income Page</h1>
			<img className="expensesphoto" src={IncomesImg} alt="Incomes photo" />
			<TabsIncomes />
		</div>
	);
};

export default Incomes;
