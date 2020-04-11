import React from 'react';

// BOOTSTRAP
import { InputGroup } from 'react-bootstrap';

const Textarea = ({placeholder, rows, icon, onChange, name, required, onIconClick}) => {

    return (
        <InputGroup className='py-2' >
            <textarea 
                className="form-control"
                rows={rows}
                placeholder={placeholder}
                onChange={(e)=>onChange ? onChange(e.target.value, e) : null}
                name={name}
                required={required}
                style={{resize:'none'}}
            />
            { icon ? <InputGroup.Append onClick={()=>onIconClick()} ><InputGroup.Text><img height={20} src={icon} alt='icon' /></InputGroup.Text></InputGroup.Append> : null }
        </InputGroup>
    )
}

export {Textarea}