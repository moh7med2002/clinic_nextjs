'use client'
import DailyAppointments from "@/components/admin/DailyAppointments";
import LastTransactions from "@/components/admin/LastTransactions";
import PatientRegistrationChart from "@/components/admin/PatientRegistrationChart";
import QuickActions from "@/components/ui/QuickActions";
import RevenueAppointmentsChart from "@/components/admin/RevenueAppointmentsChart()";
import Statistics from "@/components/admin/Statistics";

export default function page() {
    return (
        <div>
            <Statistics/>
            <QuickActions/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                <DailyAppointments/>
                <LastTransactions/>
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                <RevenueAppointmentsChart/>
                <PatientRegistrationChart/>
            </div>
        </div>
    );
}