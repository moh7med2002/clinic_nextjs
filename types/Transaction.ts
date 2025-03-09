import { PaymentStatus } from "@/utils/enums/payment-status"

export interface Transaction {
    id:number,
    patient:{
            name:string
    },
    date:string,
    note:string,
    fee:number
    status:PaymentStatus
}