import React from 'react';
import Form from 'react-bootstrap/Form';

// Components
import { Input, Button } from '../../Components';

const LoginForm = () => {

    return(
        <Form>
            <Input 
                placeholder="Email"
            />
            <Input 
                placeholder="Password"
            />
            <Button 
                text='Sign-in'
                block
            />
        </Form>
    )
}

export { LoginForm }