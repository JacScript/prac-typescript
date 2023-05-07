import { useState } from 'react';
import { IEmployee } from "./Employee.type";

import './EmployeeForm.style.css';

type Props = {
    data: IEmployee;
    onBackButtonClickHandler: () => void;
    onUpdatedClickedHandler: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
    const { data, onBackButtonClickHandler, onUpdatedClickedHandler } = props;

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);

    const onFirstNameChangeHandler = (e: any) => {
        setFirstName(e.target.value);
    }

    const onLastNameChangeHandler = (e: any) => {
        setLastName(e.target.value);
    }

    const onEmailChangeHandler = (e: any) => {
        setEmail(e.target.value);
    }

    const onSubmitButtonClickHandler = (e: any) => {
        e.preventDefault();
        const updatedData: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email,
        };
        onUpdatedClickedHandler(updatedData);
        onBackButtonClickHandler();
    }

    return (<div className="form-container">
        <h3>Add Employee Form</h3>
        <form onSubmit={onSubmitButtonClickHandler}>
            <div>
                <label>First Name :  </label>
                <input type="text" value={firstName} onChange={onFirstNameChangeHandler} />
            </div>

            <div>
                <label>Last Name : </label>
                <input type="text" value={lastName} onChange={onLastNameChangeHandler} />
            </div>

            <div>
                <label>Email Add : </label>
                <input type="text" value={email} onChange={onEmailChangeHandler} />
            </div>
            <div>
                <input type="button" value="Back" onClick={onBackButtonClickHandler} />
                <input type="submit" value="Update Employee" />
            </div>
        </form>
    </div>)
}

export default EditEmployee;  