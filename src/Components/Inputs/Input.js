import React from 'react';

// BOOTSTRAP
import { InputGroup, Form } from 'react-bootstrap';

const Input = ({placeholder, icon, type, onChange, name, required, onIconClick, value, disabled}) => {

    return (
        <InputGroup className='py-2' >
            <Form.Control 
                placeholder={placeholder}
                type={type}
                onChange={(e)=>onChange ? onChange(e.target.value, e) : null}
                name={name}
                required={required}
                value={value}
                disabled={disabled}
            />
            { icon ? <InputGroup.Append onClick={()=>onIconClick()} ><InputGroup.Text><img height={20} src={icon} alt='icon' /></InputGroup.Text></InputGroup.Append> : null }
        </InputGroup>
    )
}

export {Input}