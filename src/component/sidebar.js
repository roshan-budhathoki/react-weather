import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const logoutUser = () => {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        userDetails?.login = false;
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        navigate('/');
    }
    return (
        <>
            <div className="lg:flex sidebar w-[15%] h-[100%] justify-between hidden flex-col" style={{background : '#EEF2F3', color : '#607fad' }}>
                <div className="h-[40%]">
                    <div className="font-bold flex pt-5 pb-5 pl-8 text-2xl" style={{ background :'#f6f6f6' }}>
                        <i className="uil uil-cloud w-10"></i>
                        <h2>Weather</h2>
                    </div>
                    <div className="mt-5">
                        <div className="flex font-semibold p-5 hover:bg-slate-600 hover:text-slate-100 rounded-full" style={{ fontSize: '18px'}}>
                            <i className="uil uil-estate w-7 ml-5"></i>
                            <p>Dashboard</p>
                        </div>
                        
                    </div>
                </div>
                <div className="h-[25%] text-slate-500">
                    <div className="ml-7">
                        <p>System</p>
                    </div>
                    <div className="flex p-5 mt-2 hover:bg-slate-600 hover:text-slate-100 rounded-full text-slate-500">
                        <i className="uil uil-setting w-7 ml-5"></i>
                        <p>Setting</p>
                    </div>
                    <div className="flex p-5 hover:bg-slate-600 text-indigo-700 hover:text-slate-100 rounded-full" onClick={logoutUser}>
                        <i className="uil uil-signout w-7 ml-5"></i>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Sidebar