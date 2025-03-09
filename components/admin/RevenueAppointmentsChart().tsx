'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ShadowParent from '../ui/ShadowParent';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
        {
            label: 'Appointments',
            data: [30, 45, 60, 70, 85],
            backgroundColor: '#3498DB',
        },
        {
            label: 'Revenue ($)',
            data: [1000, 1500, 2000, 2500, 3000],
            backgroundColor: '#27AE60',
        },
    ],
};

export default function RevenueAppointmentsChart() {
    return (
        <ShadowParent>
            <h3 className="font-semibold mb-4">Appointments and Revenue Over Last 6 Months</h3>
            <Bar data={data} />
        </ShadowParent>
    );
}