import React, {useState, useEffect, createContext} from 'react';

const Context = createContext({})

const useUser = () => {
    const [user, setUser] = useState()
    const userContext ={user, setUser}
    return <Context.Provider value={userContext} ></Context.Provider>
}

export {useUser}