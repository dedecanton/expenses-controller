import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


const Expenses = ({ items }) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  // items.forEach(item => console.log()


  return (

    <div>
      <Card className="expenses"> 
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />

        {
          items
            .filter(item => new Date(item.date).getFullYear() === parseInt(filteredYear))
            .map((item, index) => (

              <ExpenseItem
                key={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            ))}
      </Card>
    </div>
  );
}



export default Expenses;
