import React from 'react'
import { useSelector} from 'react-redux'

const DailyContent = () => {
    const weather = useSelector((state) => state.weather.value)

    return (
        <div className="lg:block hidden leftContent w-[20%]">
            <div className="flex font-semibold px-5 pt-5 w-full text-slate-100 justify-between">
                <p className="text-2xl">Welcome User</p>
                <p className="font-normal mt-2">{weather?.time}</p>
            </div>
            <div className="text-slate-100 border-b-2 border-gray-300 shadow-lg pb-5">
                <i className="uil uil-clouds text-slate-100 ml-5" style={{ fontSize: '48px' }}></i>
                <div className="flex w-full justify-between pl-7 pr-7">
                    <p className="text-3xl font-semibold">{weather?.cel} °C</p>
                    <p className="mt-1 font-normal items-center">{weather?.cond}</p>
                </div>
            </div>
            <p className='w-full text-center pt-6 font-bold text-slate-100'>Location: {weather?.location}</p>
            <div className="text-slate-100 mt-7">
                <p className="m-2">Chances of rain</p>
                <div className="flex p-2">
                    <p className='w-16'>{weather?.chances?.[0]?.time}</p>
                    <div className="w-full">
                        <div className="border-none rounded-full mx-2 h-5 bg-indigo-200">
                        </div>
                        <div className= {`z-10 -mt-5 border-none rounded-full mx-2 h-5`} style={{ background: '#607fad' , width: weather?.chances?.[0]?.chance_of_rain }}>
                        </div>
                    </div>
                    <p>{weather?.chances?.[0]?.chance_of_rain}</p>
                </div>
                <div className="flex p-2">
                    <p className='w-16'>{weather?.chances?.[1]?.time}</p>
                    <div className="w-full">
                        <div className="border-none rounded-full mx-2 h-5 bg-indigo-200">
                        </div>
                        <div className= {`z-10 -mt-5 border-none rounded-full mx-2 h-5`} style={{ background: '#607fad', width: weather?.chances?.[1]?.chance_of_rain }}>
                        </div>
                    </div>
                    <p>{weather?.chances?.[1]?.chance_of_rain}</p>
                </div>
                <div className="flex p-2">
                    <p className='w-16'>{weather?.chances?.[2]?.time}</p>
                    <div className="w-full">
                        <div className="border-none rounded-full mx-2 h-5 bg-indigo-200">
                        </div>
                        <div className= {`z-10 -mt-5 border-none rounded-full mx-2 h-5`} style={{ background: '#607fad', width: weather?.chances?.[2]?.chance_of_rain}}>
                        </div>
                    </div>
                    <p>{weather?.chances?.[2]?.chance_of_rain}</p>
                </div>
                
            </div>
            <div className="text-slate-100 mt-16">
                <p className="ml-2">Sunrise & Sunset</p>
                <div className="flex border-2 rounded-lg px-2 py-3 mx-1 my-2" style={{ background: '#607fad'}}>
                    <i className="uil uil-cloud-sun text-2xl w-10 "></i>
                    <div>
                        <p className="font-light text-slate-100">Sunrise</p>
                        <p className="text-2xl">{weather?.sunrise?.[0]}</p>
                    </div>
                    <p className="text-slate-100 ml-9 mt-4">{weather?.sunrise?.[1]}</p>
                </div>
                <div className="flex border-2 rounded-lg px-2 py-3 mx-1 my-2" style={{ background: '#607fad'}}>
                    <i className="uil uil-sunset text-2xl w-10"></i>
                    <div>
                        <p className="font-light ">Sunset</p>
                        <p className="text-2xl ">{weather?.sunset?.[0]}</p>
                    </div>
                    <p className="text-slate-100 ml-9 mt-4">{weather?.sunset?.[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default DailyContent