'use client';

import { useGlobalContext } from "../context/Store"
import { useState } from "react"

interface InputTodoProps {
    checked: boolean,
    text: string,
    id: string,
    date: string
}

export const InputTodo = ({ checked, text, id }: InputTodoProps) => {

    const { darkTheme, data, setData } = useGlobalContext()

    const [textValue, setTextValue] = useState(text as string)
    const [check, setCheck] = useState(checked as any)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const indexItem = data.findIndex((item: any) => item.id === id)

        if (indexItem !== -1 && data[indexItem]["id"] === id) {
            const newData = data.filter((item: any) => item.id !== id)
            const updatedData = {
                id: id,
                title: textValue,
                completed: check
            }
            localStorage.setItem('todo', JSON.stringify([...newData, updatedData]))
            setData(JSON.parse(localStorage.getItem('todo') as any))
        }
    }

    const handleCheck = () => {
        setCheck(!check)
    }
    
    const handleText = (e: any) => {
        setTextValue(e.target.value)
    }

    return (
        <form className={`flex flex-row gap-4 items-center py-5 px-8 border ${darkTheme ? 'border-slate-700 bg-slate-800' : 'bg-white border-zinc-300'} `} onSubmit={handleSubmit}>
            <input
                type='checkbox'
                className={`appearance-none w-6 h-6  md:w-8 md:h-8 rounded-full ${darkTheme ? 'indeterminate:bg-slate-900 border-slate-600 checked:bg-slate-500' : 'indeterminate:bg-slate-100 border-slate-300 checked:bg-slate-300'} border-2  focus:outline-none`}
                checked={check}
                value={check}
                onChange={handleCheck} />
            <input value={textValue} onChange={handleText} className={`font-semibold focus:outline-none ${darkTheme ? 'bg-slate-800': ''} w-full`} />
        </form>
    )
}