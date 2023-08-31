import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
export default function AddVlog() {
  const [vlog, setvlog] = useState('')
  let [url, seturl] = useState();
  let [title, settitle] = useState();

  let [description, setdescription] = useState();
  let [error, seterror] = useState('');
  let [ExtraSize, setextraSize] = useState('');


  let Url;
  const PreviousPage = () => {

    window.history.back()
  }
  let setvideo = (event) => {
    if (setextraSize) {
      setextraSize(false)
    }

    console.log("monu");
    const buffer = event.target.files[0];
    console.log(buffer);
    const size = buffer.size;
    if (size >= 17825792) {
      seturl('');
      console.log(size);
      setextraSize(true)
      console.log(ExtraSize);
      return false
    }
    Url = URL.createObjectURL(buffer);
    console.log(Url);
    if (event.target.files.length !== 0) {
      console.log(size);


      setvlog(buffer);
      console.log(buffer);
      seturl((Url))
    }
  }
  const upload_Video = () => {
    if (!title || !description) {
      seterror(true);
      return false;
    }
    if (vlog === '') {
      console.log(vlog);
      console.log("no vlog");
      return false;
    } else {
      let url = 'http://localhost:5000/vlog'
      const formdata = new FormData()
      formdata.append('vlog', vlog)
      formdata.append('title', title)
      formdata.append('description', description)


      axios.post(url, formdata).then((resp) => {
        settitle("")
        setdescription("")
        console.log("Uploaded");
      })
        .catch((err) => {
          alert('Vlog Posted Successfully')
          settitle("");
          setdescription("");
          setvlog('')
          seturl()

          console.log(err)
        })
      seturl('')

    }


  }
  return (
    <div className='Addvlog'>
      <div id='back'>
        <Link>
          <button id='Previous' onClick={PreviousPage}><img src="backArrow.png" alt="" /></button>
        </Link>
        <br />
      </div>
      <label id='label' htmlFor="Videoinput">
        +
        <input type="file" accept='.mp4' onClick={setvideo} onChange={setvideo} id='Videoinput' />
      </label>
      <div id="VideoBlock">
        <video src={url} controls id='sourcVideo'value={vlog}></video>

      </div>

      {ExtraSize && <h4 className="errorhandle">file size is large</h4>
      }

      TITLE
      <br />
      <input type="text" id='title' placeholder='Set title' onChange={(event) => settitle(event.target.value)} value={title} />
      {error && !title && <h4 className="errorhandle">Enter title</h4>}
      <br />
      DESCRIPTION
      <br />
      <textarea name="Text1" cols="40" rows="5" id='description' placeholder='Leave description'
        onChange={(event) => setdescription(event.target.value)} value={description}></textarea>
      <br />
      {error && !description && <h4 className="errorhandle">Give description</h4>}

      <button id='Buttonupload' onClick={upload_Video}>UPLOAD</button>
    </div>
  )
}



