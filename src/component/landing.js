import React, {useState} from 'react'
import {Helmet} from 'react-helmet';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[location, setLocation] = useState('');
    const[error, setError] = useState('');
    const[login, setLogin] = useState(false);
    const[register, setRegister] = useState(false);

    const saveUser = () =>{
        if(name === '' || email === '' || password === '' || location === ''){
            setError('Fields required')
        } else{
            const userData = {
                name,
                email,
                password,
                location,
                login: false,
            }
            localStorage.setItem("userDetails", JSON.stringify(userData));
            setError('');
            setEmail('');
            setLocation('');
            setName('');
            setPassword('');
            setPassword('');
            setRegister(false);
        }
    }

    const loginUser = () => {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        if(email === '' || password === ''){
            setError('Fields required')
        }else if(email !== userDetails.email ||  password !== userDetails.password){
            setError('Enter Valid Details')
        }else{
            if(userDetails){
                userDetails.login = true;
                localStorage.setItem("userDetails", JSON.stringify(userDetails));
                setError('');
                setEmail('');
                setPassword('');
                setLogin(false);
                navigate('/dashboard');
            }
            
        }
    }
    const loginUi = 
        <div className='absolute h-screen w-screen overflow-hidden flex justify-center items-center text-slate-700'>
            <div className={ `relative rounded-lg bg-slate-200 py-5 px-16 border-2 border-slate-100` }>
                <div className='absolute ml-[70%] bg-slate-700 hover:bg-red-600 rounded-full px-1' onClick={() => {setLogin(false)}}>
                    <i className="uil uil-times font-semibold text-slate-100"></i>
                </div>
                <div className='w-full flex text-center bg-red-300 pl-4 font-semibold font-mono mb-2'>
                    {error}
                </div>
                <div>
                    <h1 className='w-full mb-2 -mt-2 text-center text-xl font-semibold text-slate-700'>Sign Up</h1>
                </div>
                <div className='pt-2 pb-2'>
                    <p className='pb-2 font-light font-mono'>Enter your email:</p>
                    <input type="email" value={email} onChange= {(e)=> setEmail(e.target.value)} className='rounded-md outline-none py-1 pl-3 w-52' placeholder='Enter your email' required></input>
                </div>
                <div className='pb-2'>
                    <p className='pb-2 font-light font-mono'>Enter your password:</p>
                    <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)} className='rounded-md outline-none py-1 pl-3 w-52' placeholder='Enter your password' required></input>
                </div>
                <div className='w-full flex justify-center mt-5'>
                    <button className='border-2 px-5 outline-none py-1 font-mono hover:text-slate-100 hover:text-xl hover:bg-slate-600 border-slate-500 rounded-lg' onClick={loginUser}> Sign In</button>
                </div>
            </div>
        </div> 
    const registerUi =
            <div className='absolute h-screen w-screen overflow-hidden flex justify-center items-center text-slate-700'>
                <div className={ `relative rounded-lg bg-slate-200 py-5 px-16 border-2 border-slate-100` }>
                    <div className='absolute ml-[70%] bg-slate-700 hover:bg-red-600 rounded-full px-1' onClick={() => {setRegister(false)}}>
                        <i className="uil uil-times font-semibold text-slate-100"></i>
                    </div>
                    <div className='w-full flex text-center bg-red-300 pl-4 font-semibold font-mono mb-2'>
                        {error}
                    </div>
                    <div>
                        <h1 className='w-full mb-2 -mt-2 text-center text-xl font-semibold text-slate-700'>Sign Up</h1>
                    </div>
                    <div className='pt-2 pb-2'>
                        <p className='pb-1 font-light font-mono'>Enter your name:</p>
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value) } className='rounded-md outline-none py-1 pl-3 w-52' placeholder='Enter your name' required></input>
                    </div>
                    <div className='pb-2'>
                        <p className='pb-2 font-light font-mono'>Enter your email:</p>
                        <input type="email" value={email} onChange= {(e)=> setEmail(e.target.value)} className='rounded-md outline-none py-1 pl-3 w-52' placeholder='Enter your email' required></input>
                    </div>
                    <div className='pb-2'>
                        <p className='pb-2 font-light font-mono'>Enter your password:</p>
                        <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)} className='rounded-md outline-none py-1 pl-3 w-52' placeholder='Enter your password' required></input>
                    </div>
                    <div className='pb-2'>
                        <p className='pb-2 font-light font-mono'>Enter your location:</p>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className='rounded-md outline-none py-1 pl-3 w-52' placeholder='Enter your location' required></input>
                    </div>
                    <div className='w-full flex justify-center mt-5'>
                        <button className='border-2 px-5 outline-none py-1 font-mono hover:text-slate-100 hover:text-xl hover:bg-slate-600 border-slate-500 rounded-lg' onClick={saveUser}> Sign Up</button>
                    </div>
                </div>
            </div> 
    return (
        <section className="bg-[url('./images/234.jpg')] h-screen">
            {/* login Page */}
            { register && <div className='absolute h-screen w-screen overflow-hidden bg-slate-100 opacity-75'></div>}
            { login && <div className='absolute h-screen w-screen overflow-hidden bg-slate-100 opacity-75'></div>}
                {register && registerUi}
                {login && loginUi}
            <Helmet>
                <title>Weather | Dashboard</title>
            </Helmet>
            <nav className="flex w-full justify-between p-7 border-b-2 border-slate-200">
                <div className=" font-bold flex text-2xl text-slate-700">
                    <i className="uil uil-cloud w-10"></i>
                    <h2 className='hidden sm:block'>Weather</h2>
                </div>
                <div className='hidden sm:block'>
                    <ul className="flex w-52 font-semibold font-mono mt-1 text-xl justify-between text-slate-700" >
                        <li className='hover:text-2xl'>Service</li>
                        <li className='hover:text-2xl'>AboutUs</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex w-40 sm:w-52 justify-between font-bold text-slate-700">
                        <li className="border-2 border-slate-700 rounded-full sm:px-3 px-2 py-1 hover:bg-slate-700 hover:text-slate-100" onClick={()=> setLogin(true)}>Sign In</li>
                        <li className="border-2 border-slate-700 rounded-full sm:px-3 px-2 py-1 hover:bg-slate-700 hover:text-slate-100" onClick={()=>setRegister(true)}>Sign Up</li>
                    </ul>
                </div>
            </nav>
            <div className="flex h-[42%] border-x-2 border-slate-100 ml-[10%] mr-[10%]">
                <div className="pt-32 md:pt-40 w-[70%]">
                    <p className="typewriter font-bold font-mono pl-5 text-slate-700 sm:text-5xl">World Wide <br/> Weather Forecast <p className='hidden sm:block'>Is Here</p></p>
                </div>
                <p className="leading-8 font-mono hidden md:block pt-40 border-b-2 border-slate-100 pl-5">The World's Most Accurate ForeCaster.<br/>
                    With extreme weather on the rise.<br/> Its so easy to
                    receive the weather <br/> conditions in your
                    current location.
                </p>
            </div>
            <div className="flex justify-center mt-28 text-2xl text-slate-200 font-bold font-mono">
                <p>Your Weather Forecast.</p>
            </div>
            <div className="flex justify-center mt-10 text-xl hover:text-2xl text-slate-200 font-bold font-mono">
                <button className="border-4 border-slate-300 rounded-md px-10" onClick={() => setLogin(true)}>Sign In</button>
            </div>
        </section>
    )
}

export default Landing