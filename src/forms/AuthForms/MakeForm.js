import React, { useState } from 'react';

// BOOTSTRAP
import Form from 'react-bootstrap/Form';

// Components
import { Input, Button, Alert} from '../../Components';

// METHODS
import {showAlert} from '../../Components/Alerts'

// REPOSITORY
import { RegisterMaker } from "../../repositories/AuthRepository";

// ICONS 
import EyeIcon from '../../assets/icons/eye.png';


const MakerForm = ({history}) => {

    const [state, changeState] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [showPass, changeShowPass] = useState(false)
    const [alert, changeAlert] = useState({})

    const handleSubmit = async (e) =>{
        e.preventDefault()
        let user = await RegisterMaker(state)
        if(user.sucess){
            window.open('/maker', '_self')
        }
        else{
            showAlert(changeAlert, user.message)
        }
    }
    
    const handleState = (st, e) => {
        changeState({
            ...state,
            [st]: e
        })
    }

    const handleShowPass = () => {
        changeShowPass(!showPass)
    }

    return(
        <Form onSubmit={(e)=>handleSubmit(e)} >
            <Alert {...alert} />
            <Input 
                placeholder="Username"
                name="username"
                onChange={(e)=> handleState('username', e)}
                required
            />
            <Input 
                placeholder="Email"
                name='Email'
                onChange={(e)=> handleState('email', e)}
                required
                type='email'
            />
            <Input 
                placeholder="Password"
                name="password"
                onChange={(e)=> handleState('password', e)}
                required
                type={showPass ? "text" : "password"}
                icon={EyeIcon}
                onIconClick={()=>handleShowPass()}
            />
            <Button 
                text='Sign-up'
                block
                type='submit'
            />
        </Form>
    )
}

export { MakerForm }