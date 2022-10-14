import React, {useState} from 'react';

import './NewExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const handleTitleChange = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:e.target.value
            
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value};
        // });
    };  

    const handleAmountChange = (e) => {
        setEnteredAmount(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount:e.target.value});
    };

    const handleDateChange = (e) => {
        setEnteredDate(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };



    return (

        <form onSubmit={handleSubmit} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Titel</label>
                    <input type="text" value={enteredTitle} onChange={handleTitleChange} />
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={handleAmountChange} />
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" min="2019-01-01" value={enteredDate} max="2022-12-31" onChange={handleDateChange} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;