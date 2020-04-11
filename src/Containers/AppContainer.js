import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

// BOOTSTRAP
import { Row, Col, Dropdown, Button, Container, Navbar } from 'react-bootstrap';

// ICONS
import LogoIcon from '../assets/icons/conference.png';

// STORE
import store from '../redux/store';
import { signOut } from '../repositories/AuthRepository';

const AppContainer =  ({children, location}) => {

    const [path, changePath] = useState('/home')
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        changePath(location.pathname)
        if(window.location.href.toString().includes('maker')){
            setMenu([
                {text: 'home', path: '/maker/home'},
                {text: 'current projects', path: '/maker/current'},
                {text: 'history projects', path: '/maker/history'},
            ])
        }
        if(window.location.href.toString().includes('creative')){
            setMenu([
                {text: 'home', path: '/creative/home'},
                {text: 'current projects', path: '/creative/current'},
                {text: 'history projects', path: '/creative/history'},
            ])
        }
    }, [location])


    return(
        <Row >
            <Col className='d-none d-lg-block col-2' ></Col>
            <Col className='makerContainer-sidebar px-0 vh-100 d-none d-lg-block col-2' >
                <Row className='makerContainer-sidebar-profile m-0' >
                    <Col className='p-0' >
                        <Dropdown >
                            <Dropdown.Toggle variant="success" as={Button} className='d-block makerContainer-sidebar-profile  w-100 mx-0' id="dropdown-basic">
                                {store.getState().user.username}
                            </Dropdown.Toggle>

                            <Dropdown.Menu size="lg" >
                                <Dropdown.Item onClick={()=>signOut()} >Cerrar sesión</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                {
                    menu.map((item, i)=>{
                    return(
                        <Row key={i} >
                            <Col >
                                <Link style={{textDecoration:'none'}} to={item.path} onClick={()=>changePath(item.path)} >
                                    <span className={`makerContainer-nav p-2 ${item.path === path ? 'makerContainer-active' : ''} `}>
                                        <p className='text-center my-0' >{item.text}</p>
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
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    {children}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export {AppContainer}