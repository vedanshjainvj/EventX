import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const Charty = ({chartData}) => {
  const options = {
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Set the font color for x-axis labels
        },
        layout: {
          padding: 20
      }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Set the font color for y-axis labels
        },
      },
    },
  };
  return (
   <>
   <div className='h-[40vh]'>
   <Bar data={chartData} options={options}/>
   </div>
  
   </>
  )
}

export default Charty