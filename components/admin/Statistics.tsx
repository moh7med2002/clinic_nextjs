import React from 'react'
import StatisticsBox from '../ui/StatisticsBox'
import {FiUsers, FiCalendar, FiDollarSign} from "react-icons/fi"; 

export default function Statistics() {
    return (
        <div className="statisticsGrid">
            <StatisticsBox color="#E74C3C" icon={FiUsers} text="Total Doctors" number={20}/>
            <StatisticsBox color="#3498DB" icon={FiUsers} text="Total Patients" number={5}/>
            <StatisticsBox color="#F39C12" icon={FiCalendar} text="Total Appointments" number={30}/>
            <StatisticsBox color="#27AE60" icon={FiDollarSign} text="Total Revenue" number={120}/>
        </div>
    )
}