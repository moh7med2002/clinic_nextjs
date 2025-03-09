'use client'
import { createUser } from '@/actions/createUser';
import InputField from '@/components/ui/InputField'
import Select from '@/components/ui/Select';
import SubmitButton from '@/components/ui/SubmitButton';
import { departments } from '@/utils/data/fakeData';
import roles from '@/utils/data/roles';
import React, { useActionState } from 'react'
import {FiMail,FiUser ,FiLock,FiCalendar,FiBriefcase} from "react-icons/fi"; 
import {FaUsers} from "react-icons/fa"; 

export default function page() {
    const [state,action] = useActionState(createUser,null)
    return (
        <form>
            <div className='mb-3'>
                <InputField
                    type='text'
                    required={true}
                    name="username"
                    placeholder="User Name"
                    icon={FiUser}
                />
            </div>
            <div className='mb-3'>
                <InputField
                    type='text'
                    required={true}
                    name="email"
                    placeholder="E-mail"
                    icon={FiMail}
                />
            </div>
            <div className='mb-3'>
                <InputField
                    type='password'
                    required={true}
                    name="password"
                    placeholder="Password"
                    icon={FiLock}
                />
            </div>
            <div className='mb-3'>
                <Select 
                    name='department' 
                    items={departments.map(item => ({ id: item.id, name: item.name })) }
                    icon={FiBriefcase}/>
            </div>
            <div className='mb-3'>
                <Select 
                    name='Role' 
                    items={roles.map(item => ({ id: item, name: item }))}
                    icon={FaUsers}/>
            </div>
            <div className='mb-3'>
                <InputField
                    type='date'
                    required={true}
                    name="birthdate"
                    placeholder="BirthDate"
                    icon={FiCalendar}
                />
            </div>
            <SubmitButton>Save</SubmitButton>
        </form>
    )
}
