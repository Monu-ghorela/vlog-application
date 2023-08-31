import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function LoginSignup() {

    var [account, setAccount] = useState('login');
    var [email, setemail] = useState('');
    var [name, setname] = useState('');
    var [password, setpassword] = useState('');
    var [conpassword, setconpassword] = useState('');
    var [error, seterror] = useState('');
    let navigate = useNavigate();
    const authorization = localStorage.getItem('user');

    const create_account = () => {
        account === 'login' ? setAccount('signup') : setAccount('login')
        setconpassword("")
        setemail("")
        setname("")
        setpassword("")
        seterror(false)

    }

    const Sign_up = async () => {
        console.log(email + " " + name + " " + password);
        if (!name || !password || !email || !conpassword) {
            seterror(true);
            return false;
        }
        let result = await fetch("http://localhost:5000/Signup", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));

        navigate('/')


        console.log(error);
    }
    const Login = async () => {

        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        result = await result.json();
        console.log(result)
        if (result.name) {
            console.log(result.name)
            alert("data found");

            localStorage.setItem("user", JSON.stringify(result))

            navigate('/')



        }
    }
    return (<>
    <div className='Login'>

        {authorization === null ?


            account === 'login' ?
                <div className='Loginpage'>

                    <img id="vlog_logo" src="vlog_png.png" alt="none" />
                    <h3 style={{ color: 'rebeccapurple' }}>LOGIN</h3>

                    <input type="email" className='inputs' value={email} name='email' placeholder='ENTER UR EMAIL' onChange={(e) => setemail(e.target.value)} />
                    <input type="password" name="password" value={password} className='inputs' placeholder='ENTER YOUR PASSWORD' onChange={(e) => setpassword(e.target.value)} />
                    <button onClick={Login}>LOGIN</button>
                    <h4>OR</h4>

                    <button onClick={create_account}>CREATE AN ACCOUNT</button>


                </div>
                :
                <div className='Loginpage'>
                    <img id="vlog_logo" src="vlog_png.png" alt="none" />
                    <h3 style={{ color: 'rebeccapurple' }}>SIGN UP</h3>
                    <input type="name"
                        className='inputs'
                        name='name'
                        placeholder='ENTER UR NAME'
                        value={name}
                        onChange={(e) => setname(e.target.value)} />
                    {error && !name && <h4 className="errorhandle">Enter name</h4>}

                    <input type="email" value={email} className='inputs' name='email' placeholder='ENTER UR EMAIL' onChange={(e) => setemail(e.target.value)} />
                    {error && !email && <h4 className="errorhandle">Enter your mail id</h4>}


                    <input type="password" value={password} name="password" className='inputs' placeholder='ENTER YOUR PASSWORD' onChange={(e) => setpassword(e.target.value)} />
                    {error && !password && <h4 className="errorhandle">Enter password</h4>}



                    <input type="password" value={conpassword} name="password" className='inputs' placeholder='CONFIRM YOUR PASSWORD' onChange={(e) => setconpassword(e.target.value)} />
                    {error && !conpassword && <h4 className="errorhandle">confirm your password</h4>}
                    <button onClick={Sign_up}>SIGN UP </button>
                    <h4>OR</h4>

                    <button onClick={create_account}>ALREADY HAVE AN ACCOUNT</button>
                </div>
            :
            <div className="warning">
               
                <h1 >u have already logged In</h1>
            </div>


        }
    </div>
    </>
    )
}
