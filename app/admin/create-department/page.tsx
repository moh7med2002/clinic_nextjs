import InputField from '@/components/ui/InputField'
import SubmitButton from '@/components/ui/SubmitButton';
import React from 'react'
import {FiBriefcase} from "react-icons/fi"; 

export default function page() {
    return (
        <form>
            <div className='mb-3'>
                <InputField
                    type='text'
                    required={true}
                    name="name"
                    placeholder="Name"
                    icon={FiBriefcase}
                />
            </div>
            <SubmitButton>Save</SubmitButton>
        </form>
    )
}
