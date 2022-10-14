import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
import Card from '../UI/Card';

function ExpensesList(props) {

    return (
        <Card className="expenses">
            {props.expenses.map(expense => <ExpenseItem key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} />)}
        </Card>
    );
}

export default ExpensesList;