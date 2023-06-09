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

    const handleSubmit = (e?: any) => {
        if (e) { e.preventDefault() }
        const indexItem = data.findIndex((item: any) => item.id === id)

        if (indexItem !== -1 && data[indexItem]["id"] === id) {
            const newData = data.filter((item: any) => item.id !== id)
            const updatedData = {
                id: id,
                title: textValue,
                completed: check
            }

            newData.splice(indexItem, 0, updatedData as unknown as never) // remove elements from an array and, if necessary, insert new elements in their place, returning the deleted elements.

            localStorage.setItem('todo', JSON.stringify(newData))
            setData(JSON.parse(localStorage.getItem('todo') as any))
        }
    }

    const handleCheck = () => {
        setCheck(!check)
        handleSubmit()
    }

    const handleText = (e: any) => {
        setTextValue(e.target.value)
    }

    return (
        <form className={`flex flex-row gap-4 py-5 px-8  items-center border ${darkTheme ? 'border-slate-700 bg-slate-800' : 'bg-white border-zinc-300'} `} onSubmit={handleSubmit}>
            <input
                type='checkbox'
                className={`appearance-none w-6 h-6  md:w-8 md:h-8 rounded-full ${darkTheme ? 'indeterminate:bg-slate-900 border-slate-600 checked:bg-red-300' : 'indeterminate:bg-slate-100 border-slate-300 checked:bg-slate-300'} border-2  focus:outline-none`}
                checked={check}
                value={check}
                onChange={handleCheck} />
            <div className={`relative flex flex-row gap-4 items-center ${check ? ' opacity-60' : ''}`}>
                {
                    check && <div className='absolute w-full h-0.5 bg-zinc-300' />
                }
                <input value={textValue} onChange={handleText} className={`font-semibold focus:outline-none ${darkTheme ? 'bg-slate-800' : ''} w-full`} />
            </div>

        </form>
    )
}