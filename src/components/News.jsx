
import React, { useEffect } from "react";
import { Row, Col, Avatar, Typography, Card } from "antd";
import moment from "moment";
import { useGetNewsQuery } from "../services/newsApi";

const { Text, Title } = Typography;

function News({ simplified }) {
  const {
    data: cryptoNews,
    error,
    isFetching,
  } = useGetNewsQuery({ newsCategory: "Cryptocurrency", count: simplified ? 10 : 100 });

  useEffect(() => {
    console.log("Full API Response after update:", cryptoNews);
    console.log("cryptoNews.articles after update:", cryptoNews?.articles);
  }, [cryptoNews]);

  // Handle loading and errors
  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error loading news.</p>;
  if (!cryptoNews?.articles || cryptoNews.articles.length === 0) return <p>No news available.</p>;

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.articles.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={news.url || i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                {news.urlToImage ? (
                  <img
                    src={news.urlToImage}
                    alt={news.title}
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ height: "150px", background: "#ccc" }} />
                )}
              </div>
              <Title className="news-title" level={4}>
                {news.title}
              </Title>
              <Text>
                {news.description && news.description.length > 100
                  ? news.description.substring(0, 100) + "..."
                  : news.description}
              </Text>
              <div className="news-footer" style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Avatar src={news.urlToImage} />
                <Text>{news.source?.name}</Text>
                <Text style={{ marginLeft: 'auto' }}>{moment(news.publishedAt).fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
