import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import {Fotter} from '../components/Fotter'
export const Home = () => {
    return (
        <div className="App bg-gradient-to-b   from-brand-gradient  to-white ">
            <Header/>
            <Hero/>
            <Fotter/>
        </div>
    )
}
