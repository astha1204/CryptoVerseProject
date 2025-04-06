import React from 'react'
import {Button,Menu,Avatar,Typography} from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined,MoneyCollectOutlined,BulbFilled,FundOutlined,MenuOutlined, BulbOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

function Navbar() {
  //When items is defined inside JSX, it gets recreated on every render.
  const items = [
    { key: "/", label: <Link to="/">HOME</Link>, icon: <HomeOutlined /> },
    { key: "/cryptocurrencies", label: <Link to="/cryptocurrencies">CRYPTOCURRENCY</Link>, icon: <FundOutlined /> },
    // { key: "/exchanges", label: <Link to="/exchanges">EXCHANGES</Link>, icon: <MoneyCollectOutlined /> },
    { key: "/news", label: <Link to="/news">NEWS</Link>, icon: <BulbOutlined /> },
];
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className='logo'>
                <Link to="/"> CRYPTOVERSE</Link>
            </Typography.Title>
            {/* <Button className='menu-control'></Button> */}
           

            
            {/* <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">HOME</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                <Link to="/cryptocurr">CRYPTOCURRENCY</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to="/exchanges">EXCHANGES</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">NEWS</Link>
                </Menu.Item>
            </Menu> */}
            {/* You're seeing this warning because Ant Design has deprecated the use of children inside <Menu>. */}

            
    
    
        </div>
        <Menu theme="dark" mode="inline" items={items}  />;
      
    </div>
  )
}

export default Navbar
