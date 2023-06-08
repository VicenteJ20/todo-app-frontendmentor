'use client'

import { useEffect } from "react"
import { useGlobalContext } from '../context/Store'
import { InputTodo } from "./InputTodo"

export const ShowItems = () => {
    const { data, setData } = useGlobalContext()

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('todo') as any))
    }, [])

    return (
        <div className='flex flex-col'>
            {
                data && data.reverse().map((item: any) => {
                    return (
                        <InputTodo key={item.id} checked={item.completed} text={item.title} id={item.id} date={item.fecha} />
                    )
                })
            }
        </div>
    )
}