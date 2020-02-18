import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

// Components
import { Input, Button } from '../../Components';

// METHODS
import {showAlert, Alert} from '../../Components/Alerts'

// REPOSITORY
import { LoginWithEmailAndPassword } from "../../repositories/AuthRepository";

const LoginForm = () => {

    const [formdata, changeFormdata] = useState({})
    const [alert, changeAlert] = useState({})


    const handleState = (st, value) => {
        changeFormdata({
            ...formdata,
            [st]: value
        })
    } 

    const handleSubmit = async (e) =>{
        e.preventDefault()
        let user = await LoginWithEmailAndPassword(formdata.email, formdata.password)
        if(user.sucess){

        }
        else{
            showAlert(changeAlert, user.message)
        }
    }

    return(
        <Form onSubmit={(e)=>handleSubmit(e)} >
            <Alert {...alert} />
            <Input 
                placeholder="Email"
                onChange={(e)=>handleState('email', e)}
            />
            <Input 
                placeholder="Password"
                onChange={(e)=>handleState('password', e)}
            />
            <Button 
                text='Sign-in'
                block
                type='submit'
            />
        </Form>
    )
}

export { LoginForm }