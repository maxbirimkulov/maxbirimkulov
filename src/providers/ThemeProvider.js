import React,{createContext, useState, useMemo} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [type, setType] = useState(false);

    const value = useMemo(() => ({type, setType}), [type]);

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
};

