'use client'

import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/Store"
import { v4 as uuidv4 } from "uuid"

export const CreateToDo = () => {
    const { darkTheme, setData } = useGlobalContext()

    const [check, setCheck] = useState(false) as any
    const [message, setMessage] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        const newData = {
            id: uuidv4(),
            title: message,
            completed: check,
            fecha: new Date().toISOString()
        }

        const data = JSON.parse(localStorage.getItem('todo') as any)

        if (data) {
            localStorage.setItem('todo', JSON.stringify([...data, newData]))
        } else {
            localStorage.setItem('todo', JSON.stringify([newData]))
        }

        console.log(newData)

        setData(JSON.parse(localStorage.getItem('todo') as any))
        setCheck(false)
        setMessage('')
    }

    const handleClick = () => {
        setCheck(!check)
    }

    const handleMessage = (e: any) => {
        setMessage(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={`${darkTheme ? 'text-white' : 'text-dark'}`}>
            <div className={`px-8 py-5 rounded-lg ${darkTheme ? 'bg-slate-800' : 'bg-white'} flex flex-row gap-4 items-center justify-center`}>
                <input
                    type='checkbox'
                    className={`appearance-none  w-8 h-8 rounded-full ${darkTheme ? 'indeterminate:bg-slate-900 border-slate-600 checked:bg-slate-500' : 'indeterminate:bg-slate-100 border-slate-300 checked:bg-slate-300'} border-2  focus:outline-none`}
                    checked={check}
                    value={check}
                    onChange={handleClick} />
                <input type='text' placeholder='Create a new todo...' className='w-full bg-transparent text-xl placeholder-slate-400 select-none focus:outline-none' onChange={handleMessage} value={message} />
            </div>
        </form>
    )
}