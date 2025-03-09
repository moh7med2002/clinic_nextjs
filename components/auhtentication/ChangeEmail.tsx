import React from 'react'
import InputField from '../ui/InputField'
import SubmitButton from '../ui/SubmitButton'
import {FiMail } from "react-icons/fi"; 

export default function changeEmail() {
    return (
        <>
            <InputField
                type='email'
                required={true}
                name="email"
                placeholder="Email"
                icon={FiMail}
                defaultValue="email@gmail.com"
            />
            <SubmitButton>Change Email</SubmitButton>
        </>
    )
}
