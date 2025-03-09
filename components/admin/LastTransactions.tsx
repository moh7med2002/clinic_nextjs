import React from 'react'
import Table from '../table/Table'
import Header from '../table/Header'
import TableData from '../table/TableData'
import ShadowParent from '../ui/ShadowParent'

export default function LastTransactions() {
    const headerRows = ["id","Pateint","Fee","Time"]
    const data = [{id:1,pateint:"Yousef",fee:20,time:"12:am"},{id:2,pateint:"Yousef",fe:30,time:"12:am"},{id:3,pateint:"Yousef",docotr:"Mohammed",time:"12:am"}]
    return (
        <ShadowParent>
            <h3 className='mb-4 font-semibold text-[18px]'>Last Transactions</h3>
            <Table>
                <Header rows={headerRows}/>
                <tbody>
                    {data.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                        <TableData >{item.id}</TableData>
                        <TableData >{item.pateint}</TableData>
                        <TableData >{item.fee}</TableData>
                        <TableData >{item.time}</TableData>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ShadowParent>
    )
}