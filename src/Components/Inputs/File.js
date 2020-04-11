import React, {useState} from 'react';

const File = ({name, onChange}) => {

    const [file, setFile] = useState('')

    const selectFile = (e) => {
        setFile(e.target.files[0].name)
        onChange(e.target.files[0])
    }

    return(
        <label htmlFor={name} className='FileContainer p-2 my-2' >
            {
                file[0] ?  <p className='my-0' >{file}</p> : <p className='my-0' >Select a file (Optional)</p>
            }
            <input
                className='d-none'
                name={name}
                id={name}
                type='file'
                onChange={(e) => selectFile(e)}
            />
        </label>
    )
}

export {
    File
}