import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    setData: () => {},
    data: {},
});

const initialData = JSON.parse(localStorage.getItem('data') || '{}')

export const UserProvider = ({ children }) => {
    const [data, setData ] = useState(initialData);
    const value = { data, setData };

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}