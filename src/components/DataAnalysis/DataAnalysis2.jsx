import { useEffect, useState } from "react";
import data from "./data.json"
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';


ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DataAnalysis = () => {

  const [chartData, setChartData] = useState({})

  useEffect(() => {

    setTimeout(() => {
      setChartData({
        labels: data.map(item => item.ngay_mua),
        datasets: [
          {
            label: '',
            data: data.map((item) => item.trigia),
            fill: false,
            // type: 'line',
            borderColor: 'rgb(255, 99, 132)',
            tension : 0
          },
        ],
      })
    }, 1000)

  }, [])
  
  return (
    <div className="App">
      <div className='chart'>
        {
          chartData && chartData?.datasets && (
            <Line 
              options={ {
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'SPO2 vs TIME',
                    },
                  },
                }} 
              data={chartData} 
            />
          )
        }
      </div>
    </div>
  );
}



export default DataAnalysis;