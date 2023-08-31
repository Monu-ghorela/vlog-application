import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {


    return (

        <>

            <div className='Navbar'>
                
                
                <div className="elements">
                    <img src="vlog_png.png" alt="none" />


                    <div className='rightFloat'>
                        <Link to={"/Search"}>
                            <button id='searchButton1'>
                                <img src="search_logo.jpg" alt="none" />
                            </button>
                        </Link>
                        <Link to={"/Notifications"}>
                            <button id='searchButton1' src="bellicon.png">
                                <img src="bellicon.png" alt="none" />

                            </button>
                        </Link>
                        <Link to="/Profile" >
                            <button id='searchButton1'>
                                <img src="profile.png" alt="none" />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>




        </>
    )
}
