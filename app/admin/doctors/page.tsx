import UserTable from '@/components/admin/UserTable'
import { doctors } from '@/utils/data/fakeData'
import { roles } from '@/utils/enums/roles'
import React from 'react'

export default function page() {
  return (
    <UserTable role={roles.Doctor} data={doctors}/>
  )
}
