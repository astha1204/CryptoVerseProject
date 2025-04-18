import React from 'react'
import  {Routes,Route,Link} from 'react-router-dom'
import { Layout,Typography,Space} from 'antd'
// import Navbar from './components/Navbar'
import {Navbar,News,CryptoCurrencies,CryptoDetails,HomePage} from './components'

function App() {
  return (
    
    <div className='app'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
            <Route path="/" element={<HomePage />} />
              {/* <Route path="/exchanges" element={<Exchanges />} /> */}
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

     
      <div className="footer" >
        <Typography.Title level={5} style={{color:"white",textAlign:"center"}}>
          CrytoVerse
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">HOME</Link>
          {/* <Link to="/exhanges">EXCHANGES</Link> */}
          <Link to="/news">NEWS</Link>
        </Space>
      </div>
      </div>
    </div>
  )
}

export default App
