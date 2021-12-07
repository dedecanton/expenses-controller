import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css'

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = ({ onAddUser }) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();

        console.log(nameInputRef.current)

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredAge < 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter an age > 0.'
            })
            return;
        }

        onAddUser(enteredUsername, enteredAge)

        setEnteredAge('')
        setEnteredUsername('')
    }

    const usernameChangeHandler = event => setEnteredUsername(event.target.value)
    const ageChangeHandler = event => setEnteredAge(event.target.value)

    const errorHandler = () => setError(null)


    return (
        <>

            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}

            <Card className={classes.input}>
                <form action="" onSubmit={addUserHandler}>

                    <label htmlFor="username">Username</label>
                    <input
                        value={enteredUsername}
                        type="text"
                        name=""
                        id="username"
                        onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />

                    <label htmlFor="age">Age</label>
                    <input
                        value={enteredAge}
                        type="number"
                        name=""
                        id="age"
                        onChange={ageChangeHandler}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )

}


export default AddUser