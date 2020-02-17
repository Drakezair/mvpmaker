import React from 'react';
import Form from 'react-bootstrap/Form';

// Components
import { Input, Button } from '../../Components';

const CreativeForm = () => {

    return(
        <Form>
            <Input 
                placeholder="Name"
            />
            <Input 
                placeholder="Email"
            />
            <Input 
                placeholder="Password"
            />
            <Input 
                placeholder="Re-password"
            />
            <Button 
                text='Sign-up'
                block
            />
        </Form>
    )
}

export { CreativeForm }