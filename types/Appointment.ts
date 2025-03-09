import { AppointmentStatus } from "@/utils/enums/appointment-status"

export interface Appointment {
    id:number,
    patient:{
        name:string
    },
    doctor:{
        name:string
    },
    date:string,
    note:string,
    status:AppointmentStatus
}