import Header from "@/components/table/Header";
import Table from "@/components/table/Table";
import TableData from "@/components/table/TableData";
import DeleteAction from "@/components/ui/DeleteAction";
import PrimaryLink from "@/components/ui/PrimaryLink";
import ShadowParent from "@/components/ui/ShadowParent";
import Status from "@/components/ui/Status";
import UpdateAction from "@/components/ui/UpdateAction";
import {transactions } from "@/utils/data/fakeData";
import { PaymentStatus } from "@/utils/enums/payment-status";
export default function page() {
    const headerRows = ['ID','Patient',"fee",'Date',"Status","Actions","Note"]
    return (
        <div>
            <div className="mb-4">
                <PrimaryLink href={`/admin/create-transaction`}>
                    Create New Transaction
                </PrimaryLink>
            </div>
            <ShadowParent>
                <Table>
                    <Header rows={headerRows}/>
                    <tbody>
                    {transactions.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <TableData >{item.id}</TableData>
                            <TableData >{item.patient.name}</TableData>
                            <TableData >{item.fee}</TableData>
                            <TableData >{item.date}</TableData>
                            <TableData ><Status status={item.status as PaymentStatus}/></TableData>
                            <TableData classes="flex gap-x-2 items-center">
                                <UpdateAction href={`/admin/update-transaction/${item.id}`}/>
                                <DeleteAction/>
                            </TableData>
                            <TableData >{item.note}</TableData>
                    </tr>
                    ))}
                    </tbody>
                </Table>
            </ShadowParent>
        </div>
    );
}