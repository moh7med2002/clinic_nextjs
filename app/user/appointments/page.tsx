import AppointmentsList from '@/components/user-profile/AppointmentsList'
import { appointments } from '@/utils/data/fakeData'
import { AppointmentStatus } from '@/utils/enums/appointment-status'
import React from 'react'

export default function appoinments() {
    return (
        <>
            <AppointmentsList isDoctor={false} appointments={appointments.map((appointment) => ({
            ...appointment,status: appointment.status as AppointmentStatus}))}/>
        </>
    )
}
