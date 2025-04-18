import React, { use } from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import { Typography,Row,Col,Statistic } from 'antd'
import {useGetCryptosQuery} from '../services/cryptoApi'
import {CryptoCurrencies} from '../components'
import {News} from '../components'

const {Title}=Typography;

function HomePage() {
  const {data,isFetching}=useGetCryptosQuery(10);
  // console.log(data);
  //undefined bhi deta h while fetching islie loading state
  if (isFetching) return "Loading...";

  // Extract global stats safely
  const globalStats = data?.data?.stats || {};
  // If data is undefined → No crash.
  // ✔ If data.data is undefined → No crash.
  // ✔ If data.data.stats is missing → No crash, just returns {}.


  return (
    <>
    <Title level={2}>Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 10 CryptoCurrencies in the World</Title>
      <Title level={3} className='show-more'><Link to="/cryptocurrencies" >Show More</Link></Title>
    </div>
    <CryptoCurrencies simplified/>
    <div className='home-heading-container'>
      <Title level={2} className="home-title">Latest Crypto News</Title>
      <Title level={3} className='show-more'><Link to="/news" >Show More</Link></Title>
    </div>
    <News simplified/>
    </>
  )
}

export default HomePage
