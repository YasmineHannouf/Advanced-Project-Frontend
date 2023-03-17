
import React from 'react';
import Tabs from '../components/Tabs';
import '../styles/expensePage.css';
import expensesImg from '../assets/expenses.jpg';

// import CardsExpenses from '../components/CardsExpenses';
// import CreditCard from '../components/CreditCards';
import ProfileExpense from '../components/ProfileExpense';
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
      <h1>kifak</h1>
      <img className="expensesphoto" src={expensesImg} alt="expenses photo" />

      {/* <CardsExpenses /> */}
      {/* <CreditCard /> */}
      {/* <ProfileExpense /> */}
      <Tabs />
      
    </div>
  );
};

export default Expenses;