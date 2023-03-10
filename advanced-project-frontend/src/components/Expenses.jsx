
import React from 'react';
import Tabs from '../components/Tabs';
import CardsExpenses from '../components/CardsExpenses';

const Expenses = () => {
  const pageStyle = {
	// background:'#472183',
    marginLeft: '310px',
    marginTop: '100px',
	Width:'100%'
  };

  return (
    <div style={pageStyle}>
      <h1>kifak</h1>
      <CardsExpenses />
      <Tabs />
      
    </div>
  );
};

export default Expenses;