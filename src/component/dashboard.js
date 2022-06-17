import React from 'react'
import DailyContent from './dailyContent';
import SearchContent from './searchContent';
import Sidebar from './sidebar';
import {Helmet} from 'react-helmet';

const Dashboard = ({cityName}) => {
    return (
        <div className = "flex h-screen">
            <Helmet>
                <title>Weather | Home</title>
            </Helmet>
            <Sidebar/>
            <SearchContent cityName={cityName}/>
            <DailyContent/>
        </div>
    )
}

export default Dashboard