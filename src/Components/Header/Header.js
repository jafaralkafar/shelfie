import React from 'react'
import fox from './fox.png'

export default function Header() {
    return (
        <header>   
            <img src={fox} alt="logo" />
            <h2 style={{alignSelf:'center', color:'white', marginRight:'30px'}}>SHELFIE</h2>
            <button style={{height:'50px', alignSelf:'center', marginRight:'20px'}}>Dashboard</button>
            <button style={{height:'50px', alignSelf:'center', marginRight:'20px'}}>Add Inventory</button>
        </header>
    )
}