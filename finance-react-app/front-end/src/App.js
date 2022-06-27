import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'primeicons/primeicons.css'
import {Button} from "primereact/button";
import { FiSettings } from 'react-icons/fi';
import {Navbar, Footer, Sidebar, ThemeSettings} from '../src/components'
import { Doughnut, Line, Pie, Login, MainPage, Profile, Register } from '../src/pages';

import './App.css'


const App = () =>{
    const activeMenu =true;

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4"
                         style={{zIndex: '1000'}}>
                        <Button type="button" className="text-3xl p-3
                        hover:drop-shadow-xl hover:bg-light-gray text-white"
                                style={{background: 'blue', borderRadius:'50%'}}>
                            <FiSettings/>
                        </Button>
                    </div>
                    {activeMenu ? (
                        <div className="w-75 fixed sidebar
                        dark: bg-white">
                            <Sidebar />
                        </div>
                    ):(
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}

                    <div className={
                        `dark:bg-main-bg bg-main-bg min-h-screen w-full
                         ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                    }>
                        <div className="fixed md-static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>
                    </div>

                    <div>
                        <Routes>
                            {/*Login*/}
                            <Route path="/" element={<Login/>} />
                            <Route path="/Login" element={<Login/>} />
                            <Route path="/Register" element={<Register/>}/>
                            {/*Main*/}
                            <Route path="/MainPage" element={<MainPage/>}/>
                        </Routes>
                    </div>

                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;