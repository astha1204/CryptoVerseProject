// import React, { useState,useEffect } from 'react'
// import millify from 'millify'
// import { Link } from 'react-router-dom'
// import {Card,Row,Col,Input} from 'antd'


// import {useGetCryptosQuery} from '../services/cryptoApi'

// function CryptoCurrencies({simplified}) {
//   const count=simplified?10:100;
//   const [searchTerm,setSearchTerm]=useState("")
//   const {data:cryptosList,isFetching}=useGetCryptosQuery(count);
//   // const [cryptos,setCryptos]=useState(cryptosList?.data?.coins);
//   // The initial value of cryptos is being set from cryptosList, but since cryptosList is initially undefined, 
//   // useState will not have the correct value.
   
//   // console.log(cryptos);
  
//   const [cryptos,setCryptos]=useState([]);

//   useEffect(() => {
//     // if (cryptosList?.data?.coins) {
//     //   setCryptos(cryptosList.data.coins);
//     // }
//     //neeche wala likh rhe h islie ye no need

//     const filteredData=cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     setCryptos(filteredData)
//   }, [cryptosList,searchTerm]); // Re-run when cryptosList updates
  
//   console.log(cryptos);

//   //used to ensure map doesnt throw error but iske bina bhi kaam horha
//   if (isFetching) return <p>Loading...</p>;
// // if (!cryptos || cryptos.length === 0) return <p>No data available</p>;

//   return (
//     <>
    
//         {/* //adding search filter functionality */}
//     <div className='search-crypto'>
//     <Input placeholder="Search Cryptocurrency" onChange={(e)=>setSearchTerm(e.target.value)}/>
//   </div>

    
   

//   <Row gutter={[32, 32]} className="crypto-card-container">
//   {cryptos?.map((currency) => (
//     <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
//       <Link to={`/crypto/${currency.uuid}`}>
//         <Card
            
//           title={`${currency.rank}. ${currency.name}`}
//           extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} />}
//           hoverable
//         >
//           <p>PRICE:{millify(currency.price)}</p>
//           <p>MARKET CAP:{millify(currency.marketCap)}</p>
//           <p>DAILY CHANGE:{millify(currency.change)}%</p>
//         </Card>
//       </Link>
//     </Col>
//   ))}
// </Row>
//     </>
//   )
// }

// export default CryptoCurrencies


import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

function CryptoCurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm] = useState("");
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const coins = cryptosList?.data?.coins || [];
    const filteredData = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <p>Loading...</p>;
  if (!cryptos || cryptos.length === 0) return <p>No data available</p>;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt={currency.name}
                  />
                }
                hoverable
              >
                <p>PRICE: {millify(currency.price)}</p>
                <p>MARKET CAP: {millify(currency.marketCap)}</p>
                <p>DAILY CHANGE: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CryptoCurrencies;
