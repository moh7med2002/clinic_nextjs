import TransactionsList from '@/components/user-profile/TransactionsList'
import { transactions } from '@/utils/data/fakeData'
import { PaymentStatus } from '@/utils/enums/payment-status'
import React from 'react'

export default function page() {
    return (
        <>
            <TransactionsList transactions={transactions.map((transaction) => ({
            ...transaction,status: transaction.status as PaymentStatus}))}/>
        </>
    )
}
