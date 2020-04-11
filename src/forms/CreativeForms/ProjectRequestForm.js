import React, { useState } from 'react';

// BOOTSTRAP
import {Form } from 'react-bootstrap';

// COMPONENTS
import { Input, Textarea, Button } from '../../Components';

// REPOSITORY
import { createRequestProject } from '../../repositories/CreativeRepository';

const ProjectRequestForm = ({history, price}) => {

    const [state, changeState] = useState({
        title: '',
        desc: ''
    })

    const handleState = (st, e) => {
        changeState({
            ...state,
            [st]: e
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let project =  await createRequestProject({...state, price})
        if(project.succes){
            history.push(`/creative/project/${project.id}`)
        }

    }

    return(
        <Form className='px-4' onSubmit={(e)=>handleSubmit(e)} >
            <h2 className='color-primary mt-5' >Request your mvp</h2>
            <Input 
                placeholder='title'
                onChange={(e)=>handleState('title', e)}
            />
            <Textarea 
                placeholder='Description'
                rows='4'
                onChange={(e)=>handleState('desc', e)}
            />
            <Button
                text='Submit'
                block
            />
        </Form>
    )
}

export { ProjectRequestForm }