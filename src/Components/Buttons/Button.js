import React from 'react';

// BOOTSTRAP
import {Button as BootstrapButton} from 'react-bootstrap'

const Button = ({text, children, variant, block, onClick, type}) => {

    return (
        <BootstrapButton variant={variant} onClick={()=> onClick ? onClick() : null} type={type} block={block} className='my-2' >
            {children ? children : text}
        </BootstrapButton>
    )
}

export {Button}