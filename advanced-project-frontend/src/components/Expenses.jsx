
import React from 'react';
import Tabs from '../components/Tabs';
import '../styles/expensePage.css'
import ExpensesFixed from "./components/TableExpensesFixed";
import CreditCard from '../components/CreditCards';
const Expenses = () => {
  // const pageStyle = {
	// background:'#472183',
  //   marginLeft: '310px',
  //   marginTop: '100px',
	// Width:'100%'
  // };

  return (
    // <div style={pageStyle}>
	<div className='expensePage'>
      <ExpensesFixed></ExpensesFixed>
    </div>
  );
};

export default Expenses;