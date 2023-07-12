import { createContext, useContext, useReducer, useState } from "react";

export const DataContext = createContext('default');

const DataProvider = ({ children }) => {

    const [term, setTerm] = useState('');

    return (
        <DataContext.Provider
            value={[
                term,
                setTerm
            ]}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;