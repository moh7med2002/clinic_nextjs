import Header from "@/components/table/Header";
import Table from "@/components/table/Table";
import TableData from "@/components/table/TableData";
import DeleteAction from "@/components/ui/DeleteAction";
import PrimaryLink from "@/components/ui/PrimaryLink";
import ShadowParent from "@/components/ui/ShadowParent";
import UpdateAction from "@/components/ui/UpdateAction";
import { departments } from "@/utils/data/fakeData";
export default function page() {
    const headerRows = ['ID','Name',"Doctors",'Actions']
    return (
        <div>
            <div className="mb-4">
                <PrimaryLink href={`/admin/create-department`}>
                    Create New Department
                </PrimaryLink>
            </div>
            <ShadowParent>
                <Table>
                    <Header rows={headerRows}/>
                    <tbody>
                    {departments.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <TableData >{item.id}</TableData>
                            <TableData >{item.name}</TableData>
                            <TableData classes="flex flex-wrap gap-x-5 gap-y-2">
                                {item.doctors.map((doctor,index)=>{
                                    return <span key={index} className="bg-upcoming px-3 rounded-full text-white">{doctor}</span>
                                })}
                            </TableData>
                            <TableData>
                                <div className="flex gap-x-2 items-center">
                                    <UpdateAction href={`/admin/update-department/${item.id}`}/>
                                    <DeleteAction/>
                                </div>
                            </TableData>
                    </tr>
                    ))}
                    </tbody>
                </Table>
            </ShadowParent>
        </div>
    );
}