import React from 'react';
import classes from './AddUser.module.css'

import Card from '../UI/Card';
import Button from '../UI/Button';


const AddUser = props => {

    const addUserHandler = event => {
        event.preventDefault();
    }

    return (
        <Card className={classes.input}>
            <form action="" onSubmit={addUserHandler}>

                <label htmlFor="username">Username</label>
                <input type="text" name="" id="username" />

                <label htmlFor="age">Age</label>
                <input type="number" name="" id="age" />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )

}


export default AddUser