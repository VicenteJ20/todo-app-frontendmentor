'use client'

import { useEffect } from "react"
import { useGlobalContext } from '../context/Store'

export const ShowItems = () => {
    const { data, darkTheme, setData } = useGlobalContext()

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('todo') as any))
    }, [])

    return (
        <div>
            {
                data && data.map((item: any, index: number) => {
                    return (
                        <div key={index} className='flex flex-row gap-4 items-center justify-center'>
                            <input
                                type='checkbox'
                                className={`appearance-none  w-8 h-8 rounded-full ${darkTheme ? 'indeterminate:bg-slate-900 border-slate-600 checked:bg-slate-500' : 'indeterminate:bg-slate-100 border-slate-300 checked:bg-slate-300'} border-2  focus:outline-none`}
                                value={item.completed}
                            />
                            <p className='text-xl'>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}