import React , { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';



const ExponseItem = (props) => {


    // first elemnt - simple value, second element - value to change first element value
    const [title, setTitle] = useState(props.title);

    let default_title = props.title;
    const clickHandler = () => {

        if(title !== 'Updated!') {
            setTitle('Updated!');
        }
        else {
            setTitle(default_title);
        }
        
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExponseItem;