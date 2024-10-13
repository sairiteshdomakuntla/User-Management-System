import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

function Home() {
    const users=useSelector(state=>state.users.users);
    const removedUsers=useSelector(state=>state.users.removedUsers);

    const data={
        labels: ['Active Users','Removed Users'],
        datasets:[
            {
                label:'# of Users',
                data:[users.length,removedUsers.length],
                backgroundColor:['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            },
        ],
    };
  return (
    <div className='p-8 bg-gray-800 min-h-screen'>
        <h2 className='text-2xl font-semibold text-white mb-6'>Dashboard</h2>
        <div className='bg-gray-700 p-6 rounded-lg shadow-lg'>
            <Bar data={data} options={{responsive: true, plugins:{legend:{position:'top'}}}} />
        </div>
    </div>
  )
}

export default Home