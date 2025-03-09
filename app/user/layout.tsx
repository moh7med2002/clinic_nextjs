import Sidebar from "@/components/layout/Sidebar";
import Wrapper from "@/components/layout/Wrapper";
import {patientItems } from "@/utils/data/menuItems";
import { roles } from "@/utils/enums/roles";

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <div className="flex items-start">
            <Sidebar menuItems={patientItems} role={roles.Pateint} />
            <Wrapper role={roles.Pateint}>
                {children}
            </Wrapper>
        </div>
    );
}