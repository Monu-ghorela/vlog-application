import React, { useEffect, useState } from 'react';
import { video } from './Homepage';
export default function Watch() {
  const item = video;
  let [vlog, setvlog] = useState('');
  const [VideoSrc, setVideoSrc] = useState('');
  let result;
  let Vlog;

  useEffect(() => {
  
    getVlog();
  })
  let getVlog = async () => {
    if(VideoSrc==='')
    {
      console.log("e");

       result = await fetch(`http://localhost:5000/findVlog/${item._id}`);
      result = await result.json();
      setvlog(result);
      Vlog = vlog.vlog.data.data;
  
     let  base64String = btoa(new Uint8Array(Vlog).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
      }, ''));
      setVideoSrc(base64String);
    }



  }



  return (
    <>
      <div className='Watch'>

      <video id='VlogVideo' src={`data:video/mp4;base64,${VideoSrc}`} controls />
      </div>
 </>

  )
}
