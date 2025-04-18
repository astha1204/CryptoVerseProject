import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Row, Col, Typography, Select,Divider } from 'antd';
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import LineChart from './LineChart';
import {useGetCryptoHistoryQuery} from '../services/cryptoApi'

const { Title, Text } = Typography;
const { Option } = Select;

function CryptoDetails() {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });

  if (isFetching || !data?.data?.coin) return <p>Loading...</p>;

  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);
  console.log("coinHistory",coinHistory);

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: '24h Volume',
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Market Cap',
      value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    {
      title: 'Approved Supply',
      value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Total Supply',
      value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <>
      <Col className="coin-detail-container">
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {cryptoDetails.name} ({cryptoDetails.slug}) Price
          </Title>
          <p>
            {cryptoDetails.name} live price in US Dollars. View market cap, value statistics and supply.
          </p>
        </Col>

        <Select
          defaultValue="7d"
          placeholder="Select time period"
          className="select-timeperiod"
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((date) => (
            <Option key={date}>{date}</Option>
          ))}
        </Select>
        {coinHistory?.data?.history ? (
  <LineChart
    coinHistory={coinHistory}
    currentPrice={millify(cryptoDetails.price)}
    coinName={cryptoDetails.name}
  />
) : (
  <p>Loading chart...</p>
)}
       

        <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              {/* <Title level={3} className="coin-details-heading">
                {cryptoDetails.name} Value Statistics
              </Title> */}
              <Title level={3} className="coin-details-heading" style={{ marginBottom: '16px' }}>
  What is {cryptoDetails.name}?
  <Divider />
  
</Title>
<Col>{HTMLReactParser(cryptoDetails.description)}</Col>
              <p>An overview showing the stats of {cryptoDetails.name}</p>
            </Col>

            {stats.map(({ icon, title, value }) => (
              <Col className="coin-stats" key={title}>
                <Col className="coin-stats-name">
                  {icon}
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>

          <Col className="other-stats-info">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                Other Stats Info
              </Title>

              <p>An overview showing supply and exchanges</p>
            </Col>

            {genericStats.map(({ icon, title, value }) => (
              <Col className="coin-stats" key={title}>
                <Col className="coin-stats-name">
                  {icon}
                  <Text>{title}</Text>
                </Col>
                <Text className="stats">{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
        <Col className='coin-desc-link'>
        <Row className="coin-desc">
          <Title level={3} className='coin-details-heading'>
            what is {cryptoDetails.name}
            {HTMLReactParser(cryptoDetails.description)}</Title>

        </Row>
        <Col className='coin-links'>
        <Title className="coin-deatils-heading" level={3}>
          {cryptoDetails.name} Links
          {cryptoDetails.links.map(({name,url,type},index)=>(
            // <Title level={4}>{name}</Title>
            // <a href={url}>{name}</a>
            <Row className='coin-link' key={url+index}>
              <Title className='link-name' level={3}>{type}</Title>
              <a href={url} target="_blank" rel="noreferrer">{name}</a>
            </Row>
          ))}
        </Title>
        </Col>
        </Col>
      </Col>
    </>
  );
}

export default CryptoDetails;
