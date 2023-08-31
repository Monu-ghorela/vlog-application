import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Navbar from './Navbar'

export default function Search() {

    let [prevLocation,setpreviousLocation]=useState('/')
    return (<>
        <div className='SearchHead'>
            <Link to={prevLocation}>
            <button id='Previous' ><img src="backArrow.png" alt="" /></button>
            </Link> 
            <input type='search' className='SearchInput' placeholder='Search....'></input>
        </div>
    </>











    )
}
