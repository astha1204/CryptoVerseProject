import React from 'react'
import {Line} from "react-chartjs-2"
import {Col,Row,Typography} from "antd"
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title as ChartTitle
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ChartTitle
);

const {Title}=Typography

function LineChart({coinHistory,currentPrice,coinName}) {
  //ab line ko data and options die and dono hee nhi h 
  //loop over coin history to get prices and timestamp

  const coinPrice=[];
  const coinTimeStamp=[];

  for(let i=0;i<coinHistory?.data?.history?.length;i++)
  {
    coinPrice.push(coinHistory?.data?.history[i].price)
    //pushing each prices in the array
    // coinTimeStamp.push(coinHistory?.data?.history[i].timestamp);

    //to make timestamp readable
    coinTimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleString());

  }

  const data={
    labels:coinTimeStamp,
    datasets:[{
      label:"Price in USD",
      data:coinPrice,
      fill:false,
      backgroundColor:"#0071bd",
      borderColor:"#0071bd"
    }]
  }

  const options={
    scales: {
      y: {
        beginAtZero: true,
      }
    }
    
  }
  return (
    <>
    <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price chart</Title>
        <Col className='price-container'>
        {/* <Title level={5} className='price-change'>{coinHistory?.data?.change}% </Title> */}
        <Title level={5} className='price-change'>
      {coinHistory?.data?.change ? `${coinHistory.data.change}%` : '...'}
    </Title>
        <Title level={5} className='current-price'>Current{coinName} Price:${currentPrice} </Title>
        </Col>
    </Row>
    <Line data={data} options={options}/>
    </>
  )
}

export default LineChart
