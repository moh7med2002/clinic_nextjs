import ShadowParent from '@/components/ui/ShadowParent';
import AppointmentsList from '@/components/user-profile/AppointmentsList';
import TransactionsList from '@/components/user-profile/TransactionsList';
import UserCard from '@/components/user-profile/UserCard';
import { User } from '@/types/User';
import { appointments, transactions } from '@/utils/data/fakeData';
import { AppointmentStatus } from '@/utils/enums/appointment-status';
import { PaymentStatus } from '@/utils/enums/payment-status';
import React from 'react'

const patientData: User = {
    id: 1,
    username: "John Doe",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    email: "john.doe@example.com",
    birthdate:"1990-01-01"
};

export default function page() {
    return (
        <ShadowParent classStyle="max-w-3xl mx-auto">
            <UserCard 
                image={patientData.image} 
                name={patientData.username}
                email={patientData.email} 
                department={patientData.department?.name}
                birthdate={patientData.birthdate} 
            />
            <AppointmentsList isDoctor={false} appointments={appointments.map((appointment) => ({
            ...appointment,status: appointment.status as AppointmentStatus}))}/>
            <TransactionsList transactions={transactions.map((transaction) => ({
            ...transaction,status: transaction.status as PaymentStatus}))}/>
        </ShadowParent>
    )
}
