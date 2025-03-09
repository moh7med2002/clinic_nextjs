import AppointmentsList from '@/components/user-profile/AppointmentsList';
import UserCard from '@/components/user-profile/UserCard';
import { User } from '@/types/User';
import { appointments } from '@/utils/data/fakeData';
import { AppointmentStatus } from '@/utils/enums/appointment-status';
import React from 'react'

const patientData: User = {
    id: 1,
    username: "John Doe",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    email: "john.doe@example.com",
    birthdate:"1990-01-01",
    department:{
        name:"Tooth"
    }
};

export default function page() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <UserCard 
                image={patientData.image} 
                name={patientData.username}
                email={patientData.email} 
                department={patientData.department?.name}
                birthdate={patientData.birthdate} 
            />
            <AppointmentsList isDoctor={true} appointments={appointments.map((appointment) => ({
            ...appointment,status: appointment.status as AppointmentStatus}))}/>
        </div>
    )
}
