import React, {useState} from 'react';

// BOOTSTRAP
import { Form, Row, Col } from 'react-bootstrap';

// COMPONENTS
import { Input, Textarea, Button, File} from '../../Components';
import DatePicker from 'react-datepicker';
import { newReviewsProject } from '../../repositories/MakeRepository';

const EventProjectForm  = ({project_id, owner}) => {

    const [formData, setFormData] = useState({})

    const handleSumbit = async (e) => {
        e.preventDefault()
        let resp = await newReviewsProject(project_id, formData, owner)
        if(resp.succes === false){
            // TODO::ALERT
        }
    }

    return(
        <Form onSubmit={(e) => handleSumbit(e)} >
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h4>New Event</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input 
                                placeholder='Title'
                                onChange={(e)=>setFormData({...formData, title: e})}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Textarea 
                                placeholder='Description'
                                onChange={(e)=>setFormData({...formData, desc: e})}
                                rows={9}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DatePicker 
                                selected={formData.date}
                                onChange={date=>setFormData({...formData, date})}
                                className='datepicker-container'
                                showTimeSelect
                                placeholderText='select event date'
                                required
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <File 
                                name='file'
                                onChange={file=> setFormData({...formData, file: file})}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button 
                                text='save'
                                block
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    )
}

export {
    EventProjectForm
}