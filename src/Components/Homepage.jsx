import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../Services/CryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(10)
    const globalState = data?.data?.stats;
    if(isFetching) return <Loader/>


    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalState.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalState.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalState.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h volume" value={millify(globalState.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalState.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className='show-more'><a href="/cryptocurrencies">Show More</a></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <Title level={3} className='show-more'><a href="/news">Show More</a></Title>
            </div>
            <News simplified/>
        </>
    );
};

export default Homepage;