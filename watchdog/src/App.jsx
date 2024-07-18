import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';

function App() {

    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-center p-20 dark:bg-gray-800">
            <Navbar/>
            <button onClick={() => document.getElementById('root').classList.toggle('dark')}
                    className="h-12 w-12 rounded-full p-2 absolute bottom-10 left-10 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg className="fill-violet-400 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg className="fill-yellow-200 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
            </button>
            <div>
                <h1 className='text-center text-7xl w-[40vw] dark:text-gray-100'>Always Watching, Always Protecting</h1>
                <p className='text-center text-xl w-[40vw] pt-4 dark:text-gray-100'>WatchDog provides top-notch remote monitoring solutions for schools, hospitals, construction sites, and more.</p>
            </div>
            </div>
        </>
    )
}

export default App
