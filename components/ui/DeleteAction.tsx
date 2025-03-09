import React from 'react'
import { FiDelete } from "react-icons/fi";

export default function DeleteAction() {
    return (
        <button className=' text-error'>
            <FiDelete size={20}/>
        </button>
    )
}
