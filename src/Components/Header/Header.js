import React from 'react'
import fox from './fox.png'

export default function Header() {
    return (
        <header>   
            <img src={fox} alt="logo" />
            <h2 style={{alignSelf:'center', color:'white'}}>SHELFIE</h2>    
        </header>
    )
}