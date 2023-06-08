'use client'

import { HeaderBg } from "./components/HeaderBg"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { CreateToDo } from "./components/CreateToDo"
import { ShowItems } from "./components/ShowItems"
import { useEffect } from "react"
import { useGlobalContext } from "./context/Store"

const Home = () => {
  const { darkTheme } = useGlobalContext()
  
  return (
    <main className={`min-h-screen w-screen transition-all duration-500 ${darkTheme ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-900'}`}>
      <HeaderBg />
      <section className='-mt-32 md:-mt-62 xl:-mt-72 flex items-center justify-center'>
        <div className='w-4/5 lg:w-8/12 2xl:w-5/12 flex flex-col gap-4'>
          <header className='flex flex-row gap-12 items-center justify-between text-2xl md:text-4xl 2xl:text-5xl text-white mb-8'>
            <h1 className='tracking-wide font-bold'>T O D O</h1>
            <ThemeSwitcher />
          </header>
          <CreateToDo />
          <ShowItems />
        </div>
      </section>
    </main>
  )
}

export default Home