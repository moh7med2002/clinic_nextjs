import React from 'react'
import InputField from '../ui/InputField'
import {FiLock } from "react-icons/fi"; 
import SubmitButton from '../ui/SubmitButton';

export default function ChangePassword() {
    return (
        <>
            <div className='mb-3'>
                <InputField
                    type='password'
                    required={true}
                    name="oldPassword"
                    placeholder="Old Password"
                    icon={FiLock}
                />
            </div>
                <InputField 
                    type='password'
                    required={true}
                    name="newPassword"
                    placeholder="New Password"
                    icon={FiLock}
                />
            <SubmitButton>Change Password</SubmitButton>
        </>
    )
}
