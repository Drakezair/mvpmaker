import React from 'react';

import { Pagination as MPagination } from '@material-ui/lab';

const Pagination = ({totalitem, onChange}) => {

    return(
        <MPagination color="primary" count={200} onChange={(e, page)=>onChange(e, page)} />
    )
}

export { Pagination };