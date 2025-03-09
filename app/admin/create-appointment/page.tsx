import InputField from '@/components/ui/InputField';
import Select from '@/components/ui/Select'
import SubmitButton from '@/components/ui/SubmitButton';
import TextAreaField from '@/components/ui/TextAreaField';
import { doctors, patients } from '@/utils/data/fakeData'
import React from 'react'
import {FiUser,FiCalendar,FiBook} from "react-icons/fi"; 

export default function page() {
    return (
        <form>
            <div className='mb-3'>
                <Select
                    name='doctor' 
                    items={doctors.map(item => ({ id: item.id, name: item.username })) }
                    icon={FiUser}/>
            </div>
            <div className='mb-3'>
                <Select
                    name='patient' 
                    items={patients.map(item => ({ id: item.id, name: item.username })) }
                    icon={FiUser}/>
            </div>
            <div className='mb-3'>
                <InputField
                    type='datetime-local'
                    required={true}
                    name="time"
                    placeholder="Time"
                    icon={FiCalendar}
                />
            </div>
            <div className='mb-3'>
                <TextAreaField
                    name='note'
                    placeholder='Note'
                    required={true}
                    icon={FiBook}/>
            </div>
            <SubmitButton>Create</SubmitButton>
        </form>
    )
}
