import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../Services/CryptoNewsApi'
import { useGetCryptosQuery } from '../Services/CryptoApi'
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage = 'https://stat2.moneycontrol.com/assets/images/ms/wazirx/a-beginners-guide.jpg';


const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 10 : 100 })
    const { data: CryptoApi } = useGetCryptosQuery(100)
    if (isFetching) return <Loader/>

    return (
        <Row gutter={[24, 24]}>
            {
                !simplified && (
                    <Col
                    span={24}
                    style={{cursor:"pointer", width:"200px"}}
                    >
                        <Select
                            showSearch
                            className='select-news'
                            placeholder={newsCategory}
                            optionFilterProp='children'
                            onChange={(e) => setNewsCategory(e)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
                        >
                            <Option value='Cryptocurrency'></Option>
                            {
                                CryptoApi?.data?.coins.map((coin) =>
                                    <Option value={coin.name}>{coin.name}</Option>)
                            }
                        </Select>
                    </Col>
                )
            }
            {
                cryptoNews.value.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className="news-card">
                            <a href={news.url} target='_blank' rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className='news-title' level={4}>{news.name}</Title>
                                    <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                                </div>
                                <p>
                                    {
                                        news.description > 100
                                            ? `${news.description.substring(0, 101)}...`
                                            : news.description
                                    }
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                                        <Text className='provider-name'>{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('seconds').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );
};

export default News;