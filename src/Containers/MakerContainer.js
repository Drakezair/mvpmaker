import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

// BOOTSTRAP
import { Row, Col, Dropdown, Button, Container, Navbar } from 'react-bootstrap';

// ICONS
import LogoIcon from '../assets/icons/conference.png';

const MakerContainer = ({children, basename}) => {

    const [path, changePath] = useState('')

    useEffect(()=>{
        changePath(window.location.pathname.split(basename)[1])
    }, [basename])

    return(
        <Row>
            <Col className='makerContainer-sidebar px-0 vh-100 d-none d-lg-block col-2' >
                <Row className='makerContainer-sidebar-profile m-0' >
                    <Col className='p-0' >
                        <Dropdown >
                            <Dropdown.Toggle variant="success" as={Button} className='d-block makerContainer-sidebar-profile  w-100 mx-0' id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu size="lg" >
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                {
                    children.props.children.map((item, i)=>{
                    return(
                        <Row key={i} >
                            <Col >
                                <Link style={{textDecoration:'none'}} to={item.props.path} onClick={()=>changePath(item.props.path)} >
                                    <span className={`makerContainer-nav p-2 ${item.props.path === path ? 'makerContainer-active' : ''} `} >
                                        <p className='text-center my-0' >{item.props.name}</p>
                                    </span>
                                </Link>
                            </Col>
                        </Row>
                    )
                    })
                }
            </Col>
            <Col className='col-12 col-lg-10' >
                <Row>
                    <Col className='px-0' >
                        <Navbar bg="dark" variant="dark" className='d-flex justify-content-end' >
                            <Navbar.Brand href="#home">
                            MVP MAKER {' '}
                                <img
                                    alt=""
                                    src={LogoIcon}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                        </Navbar>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            {children}
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export {MakerContainer}