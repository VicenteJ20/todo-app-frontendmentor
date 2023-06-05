'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'

interface GlobalContextProps {
    children: React.ReactNode
}

interface ContextProps {
    darkTheme: boolean,
    setDarkTheme: Dispatch<SetStateAction<boolean>>,
    data: [],
    setData: Dispatch<SetStateAction<[]>>
}

const GlobalContext = createContext<ContextProps>({
    darkTheme: false,
    setDarkTheme: () => false,
    data: [],
    setData: () => []
})

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false)
    const [data, setData] = useState<[]>([])

    return (
        <GlobalContext.Provider value={{ darkTheme, setDarkTheme, data, setData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)