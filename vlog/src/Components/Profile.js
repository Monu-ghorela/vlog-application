import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    var [expand, setExpand] = useState(false);
    let authorization=null;
     authorization = localStorage.getItem('user');
     authorization=JSON.parse(authorization);
     let name;
     if(authorization!=null)
     {

          name=authorization.name;
     }
     
        //  console.log(authorization);

    const menuBar = () => {
        expand === true ? setExpand(false) : setExpand(true)

        console.log("clicked");
    }
    const PreviousPage = () => {

        window.history.back()
    }
    const Downloads = () => {
        navigate('/Download')

    }
    const WatchLaterSection = () => {
        navigate('/Download')

    }
    const Home = () => {
        navigate("/")


    }
    const LogOut = () => {
        localStorage.clear()
        navigate('/')
        console.log("logout");
    }

    return (<>
    <div id='profile'>

        <div className='ProfileHead'>
              
            <button id='Previous' onClick={PreviousPage} ><img src="backArrow.png" alt="" /></button>
           { authorization===null ?
            <Link to={"/Login"} id='LoginTo'>
                Login
            </Link>
            :
            <span> {name}</span>}
        </div>
        <div className="ProfileDetails">
            <button id='Dashboard' onClick={menuBar}><img src="menuIcon.png" alt="" /></button>
            {
                expand === true ?
                    <div className='Detailed'>
                        <br />
                        <h3 onClick={Home}><img src="Home_icon.png" alt="" />&nbsp;Home</h3><br />

                        <h3 onClick={WatchLaterSection}><img src="R.png" alt="" />&nbsp;Watch Later</h3><br />
                        <h3 onClick={Downloads}><img src="download.png" alt="" />&nbsp;Downloads</h3><br />
                        <h3 onClick={LogOut}><img src="logout-icon.png" alt="" />&nbsp;Log Out</h3><br />

                    </div>
                    :
                    expand === false &&
                    <div className="Shrinked">
                        <h1 onClick={Home}>
                            <img src="Home_icon.png" alt="" />
                        </h1>
                        <h1 onClick={WatchLaterSection}>
                            <img src="R.png" alt="" />
                        </h1>
                        <h1 onClick={Downloads}>
                            <img src="download.png" alt="" />
                        </h1 >
                        <h1 onClick={LogOut}>
                            <img src="logout-icon.png" alt="" />
                        </h1>

                    </div>


            }
<img src="istockphoto-1300845620-612x612.jpg" alt="" id='ProfileIMage'/>
        </div>
    </div>
    </>
    )
}
