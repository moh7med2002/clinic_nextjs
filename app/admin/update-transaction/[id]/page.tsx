import InputField from '@/components/ui/InputField'
import SubmitButton from '@/components/ui/SubmitButton';
import TextAreaField from '@/components/ui/TextAreaField';
import React from 'react'
import {FiDollarSign,FiBook} from "react-icons/fi"; 

export default async function page({params}:{params:Promise<{id:number}>}) {
    const {id} = await params
    return (
        <form>
            <InputField
                type='number'
                required={true}
                name="fee"
                placeholder="Fee"
                icon={FiDollarSign}
            />
            <div className='my-3'>
                <TextAreaField
                name='note'
                placeholder='Note'
                required={true}
                icon={FiBook}/>
            </div>
            <SubmitButton>Save</SubmitButton>
        </form>
    )
}
