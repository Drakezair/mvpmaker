import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

// Components
import { Input, Button } from '../../Components';

// METHODS
import {showAlert, Alert} from '../../Components/Alerts'

// REPOSITORY
import { LoginWithEmailAndPassword } from "../../repositories/AuthRepository";

// ICONS 
import EyeIcon from '../../assets/icons/eye.png';

const LoginForm = ({history}) => {

    const [formdata, changeFormdata] = useState({})
    const [alert, changeAlert] = useState({})
    const [showPass, changeShowPass] = useState(false)


    const handleState = (st, value) => {
        changeFormdata({
            ...formdata,
            [st]: value
        })
    } 

    const handleShowPass = () => {
        changeShowPass(!showPass)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        let user = await LoginWithEmailAndPassword(formdata.email, formdata.password)
        if(user.sucess){
            switch(user.user.type){
                case 0:
                    history.replace('/maker/home')
                    break;
                case 1:
                    history.replace('/creative/home')
                    break;
                default:
                    return null
            }
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
                type={showPass ? "text" : "password"}
                icon={EyeIcon}
                onIconClick={()=>handleShowPass()}
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