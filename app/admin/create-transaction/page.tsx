import InputField from '@/components/ui/InputField'
import Select from '@/components/ui/Select';
import SubmitButton from '@/components/ui/SubmitButton';
import TextAreaField from '@/components/ui/TextAreaField';
import { patients } from '@/utils/data/fakeData';
import payments from '@/utils/data/payments';
import React from 'react'
import {FiDollarSign,FiBook,FiUser} from "react-icons/fi"; 

export default function page() {
    return (
        <form>
            {/** pateintsLists */}
            <div className='mb-3'>
            <InputField
                    type='number'
                    required={true}
                    name="fee"
                    placeholder="Fee"
                    icon={FiDollarSign}
                />
            </div>
            <div className='mb-3'>
                <Select
                    name='patient' 
                    items={patients.map(item => ({ id: item.id, name: item.username })) }
                    icon={FiUser}/>
            </div>
            <div className='mb-3'>
                <TextAreaField
                    name='note'
                    placeholder='Note'
                    required={true}
                    icon={FiBook}/>
            </div>
            <div className='mb-3'>
                <Select
                    name='patient' 
                    items={payments.map(item => ({ id: item, name: item })) }
                    icon={FiDollarSign}
                />
            </div>
            <SubmitButton>Save</SubmitButton>
        </form>
    )
}
