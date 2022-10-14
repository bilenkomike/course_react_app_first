import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpansesFilter";
import ExpensesList from './ExpensesList';

import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [expenses, setExpenses] = useState(props.expenses);
    const handleAddFilterExpases = (filter) => {
        setFilteredYear(filter);
        setExpenses(props.expenses.filter(expense => expense.date.getFullYear().toString() === filter));
    }

    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectFilter={handleAddFilterExpases} />
            <ExpensesChart expenses={expenses} />
            <ExpensesList expenses={expenses} />
        </Card>

    );
}

export default Expenses;