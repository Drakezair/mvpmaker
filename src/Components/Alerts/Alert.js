import React from 'react';

import { Alert as BootstrapAlert} from 'react-bootstrap';

const Alert = ({variant, message, show}) => {
    if (show){
        return(
            <div className='fixed-top m-3' >
                <BootstrapAlert className='text-center' variant={variant}>
                    {message}
                </BootstrapAlert>
            </div>
        )
    }
    else {
        return null
    }
}

export {Alert}