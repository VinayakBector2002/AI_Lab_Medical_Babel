import React, { useState, useEffect } from 'react';

export default function WelcomePage(props) {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}));
        }, 100); // 600000 Update every 10 minutes

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Medical<span className='text-blue-400 bold'>Babel</span></h1>
            <h3 className='font-medium md:text-lg pb-20'>Your AI Companion</h3>

            <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-xl md:text-2xl" onClick={() => props.setShowHomePage(true)}
            >Start Session {currentTime} </button>
            </div>
        </main>
    );
}
