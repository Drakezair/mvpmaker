import React, {useState, useEffect, useRef} from 'react';

// BOOTSTRAP
import { Row, Col } from 'react-bootstrap';

// COMPONENTS
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Button, Input } from '../../Components';


// REPOSITORY
import { getProjectById, sendMessage, chatListener } from '../../repositories/GeneralRepository';

// FORMS
import { EventProjectForm } from '../../forms/MakerForms';
import { listenerReviewsProjectById, downloadReviewFile } from '../../repositories/MakeRepository';

const ProjectDetail = ({match}) =>{

    const [data, changeData] = useState({})
    const [msg, changeMsg] = useState('')
    const [chat, chatSet] = useState([])
    const [reviews, setReviews] = useState([])

    const chatBody = useRef()

    useEffect(()=>{
        const initFetch = async () =>{
            const project = await getProjectById(match.params.id)
            if(project.succes){
                changeData(project.data)
                chatListener(match.params.id, chatSet)
                listenerReviewsProjectById(match.params.id, setReviews)
                chatBody.current.scrollTop = chatBody.current.scrollHeight;
            }
        }

        initFetch()
    }, [match, chatBody])
    
    const send = async () => {
        
        if(msg !== ''){
            let resp = await sendMessage(match.params.id, 0, msg)
            changeMsg('')
            chatBody.current.scrollTop = chatBody.current.scrollHeight;
            if(resp !== undefined){
                // TO DO :: ALERT
            }
        }
    }

    return(
        <Row >
            <Col>
                <Row>
                    <Col >
                        {
                            data.status === 2 ?
                                <h1 className='my-3 text-center'>PROJECT ENDED</h1>
                                :null
                        }
                        <h1 className='text-center mt-4 color-primary' >{data.title}</h1>
                        <p className='text-center mt-4' >{data.desc}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='mx-3' >
                        <Row className='chat-container ' >
                            <Col >
                                <Row className='chat-header' >
                                    <Col>
                                        <p>Chat</p>
                                    </Col>
                                </Row>
                                <Row className='chat-body' ref={chatBody} >
                                    <Col>
                                        {
                                            chat.map((item, i)=>{
                                                return (
                                                    <Row key={i} className={`d-flex ${item.from === 0 ? "justify-content-end" : "justify-content-start"}`} >
                                                        <Col className='col-6 chat-message m-2 rounded p-2' >
                                                            <span style={{maxWidth: 200}} >
                                                                <p className='m-0' >{item.msg}</p>
                                                                <p className='text-12 m-0 float-right' >{`${new Date(item.date).toISOString().split('T')[0]} ${new Date(item.date).toISOString().split('T')[1].split('.')[0]}`}</p>
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                )
                                            })
                                        }
                                    </Col>
                                </Row>
                                
                                <Row className='chat-footer' >
                                    <Col className='col-10' >
                                        <Input 
                                            placeholder='type a message'
                                            onChange={(e)=>changeMsg(e)}
                                            value={msg}
                                        /> 
                                    </Col>
                                    <Col className='col-2' >
                                        <Button 
                                            text='send' 
                                            onClick={()=> send()}
                                        /> 
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col  >
                        <EventProjectForm project_id={match.params.id} owner={0} />
                    </Col>
                </Row>
                <Row className='my-4' >
                    <Col style={{background: '#f4f4f4', borderRadius: 5, height: 516, overflowY: 'scroll'}} >
                        <VerticalTimeline
                            
                        >
                            {
                                reviews.map((item, i)=>{
                                    return(
                                        <VerticalTimelineElement
                                            date={
                                                `created: ${new Date(item.date).toISOString().split('T')[0]} ${new Date(item.date).toISOString().split('T')[1].split('.')[0]}
                                                ${item.status===1 ? `Aprobed: ${new Date(item.date).toISOString().split('T')[0]} ${new Date(item.date).toISOString().split('T')[1].split('.')[0]}` : ''}
                                                `
                                            }
                                            iconStyle={{ background: item.status === 0 ? '#3a3535' :'#ff7315', color: '#fff' }}
                                            key={i}
                                        >
                                            <h3>{item.title}</h3>
                                            {item.desc ? item.desc.split('\n').map((it,i)=><p key={i}>{it}</p>) : null}
                                            {
                                                item.file ?
                                                    <Row >
                                                        <Col >
                                                            <Button 
                                                                onClick={()=>downloadReviewFile(item.file)}
                                                                text='Download document'
                                                                block
                                                            />
                                                        </Col>
                                                    </Row>
                                                :
                                                    null
                                            }
                                            {
                                                item.status === 0 ? <p><strong>status</strong>: pendiente</p> :  <p><strong>status</strong>: Aprobado</p>
                                            }
                                        </VerticalTimelineElement>
                                    )
                                })
                            }
                        </VerticalTimeline>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export { ProjectDetail }