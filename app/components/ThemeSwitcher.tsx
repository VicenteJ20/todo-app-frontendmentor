"use client"

import { getLocalStorage } from "../lib/localStorage"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"
import { useState } from "react"
import { useGlobalContext } from "../context/Store"

export const ThemeSwitcher = () => {

    const { darkTheme, setDarkTheme } = useGlobalContext()

    const handleDarkTheme = () => {
        localStorage.setItem('theme', 'dark')
        console.log('true')
        setDarkTheme(true)
    }

    const handleLightTheme = () => {
        localStorage.setItem('theme', 'light')
        
        console.log('false')
        setDarkTheme(false)
    }

    const handleTheme = () => {
        if (darkTheme) {
            handleLightTheme()
        } else {
            handleDarkTheme()
        }
    }
    
    return (
        <button>
            {
                darkTheme ?
                    <HiOutlineSun className='text-white' onClick={handleTheme} /> :
                    <HiOutlineMoon className='text-white' onClick={handleTheme} />
            }
        </button>
    )
}