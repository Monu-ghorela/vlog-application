import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
let video;
export default function Homepage() {
    const Navigate = useNavigate();
    const [vlogs, setvlogs] = useState([]);


    useEffect(() => {
        getproduct();
    }, [])
    const getproduct = async () => {
        let result = await fetch('http://localhost:5000/VideoFetch')
        result = await result.json()
        setvlogs(result);
    }
    console.log(vlogs);
    return (
        <div>{
            <>
                <Navbar />
                {
                    vlogs.map((item, index) => {

                        const vlog = item.vlogPoster.data.data;


                        let FullScreen = () => {
                            video = item;
                            Navigate(`/watch/${item._id}`);
                        }
                        const base64String = btoa(new Uint8Array(vlog).reduce(function (data, byte) {
                            return data + String.fromCharCode(byte);
                        }, ''));
                        return (
                            <div>
                   
                            
                                <img id='vlog' src={`data:image/png;base64,${base64String}`} alt="" onClick={FullScreen} />
                                <h1 className='Title'>{item.title}</h1>

                       

                            </div>
                        )
                    })

                }
                <Footer />
            </>
        }


        </div>
    )
}
export { video };

