import React from 'react'

// BOOTSTRAP
import { Col, Row } from 'react-bootstrap'

const CardProduct = ({image, history, url, title, desc, price, features}) => {

    const handleRedirect =() =>{
        history.push({
            pathname: 'product' + url,
            state: {
                image,
                url,
                title,
                desc,
                price,
                features
            }
        })
    }


    return(
        <Row onClick={handleRedirect} className='cursor-pointer shadow card-product-contain m-3 p-0 rounded'  >
            <Col >
                <Row className='p-2 rounded' > 
                    <Col className='d-flex align-items-center justify-content-center' >
                        <img height={200} src={image} alt='banner' />
                    </Col>
                </Row>
                <Row className='bg-gray rounded' >
                    <Col>
                        <h3 className='text-bolder my-0' >{title}</h3>
                        <p className='my-0' >{desc.slice(0,30)}{desc.length > 30 ? '...' : ''}</p>
                        <p>price: ${price}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export { CardProduct }