// import React from 'react'
// import {Row,Col,Avatar,Select,Typography,Card} from "antd"
// import moment from "moment"

// import { useGetNewsQuery } from '../services/newsApi'
// const{Text,Title}=Typography;
// const{Option}=Select;


// function News({simplified}) {
//   const { data:cryptoNews, error, isLoading } = useGetNewsQuery({ newsCategory: "Cryptocurrency", count: simplified ? 10 : 100 });

//   console.log("Loading:", isLoading);
//   console.log("Error:", error);
//   console.log("Full API Response:", data);
  


//   return (
//     <>
//     <Row gutter={[24,24]}>
//       {cryptoNews.value.map((news,i)=>(
//         <Col xs={24} sm={12} lg={8} key={i}>
//           <Card hoverable className="news-card">
//             <a href={news.url} target="_blank" rel="noreferrer">
//               <div className='news-image-container'>
//                 <Title className="news-title" level={4}>{news.content}</Title>
//               </div>
//             </a>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//     </>
//   )
// }

// export default News
import React from "react";
import { useEffect } from "react";
import { Row, Col, Avatar, Typography, Card } from "antd";
import moment from "moment";
import { useGetNewsQuery } from "../services/newsApi";

const { Text, Title } = Typography;

function News({ simplified }) {
  const {
    data: cryptoNews,
    error,

  } = useGetNewsQuery({ newsCategory: "Cryptocurrency", count: simplified ? 10 : 100 });

  useEffect(() => {
    console.log("Full API Response after update:", cryptoNews);
    console.log("cryptoNews.articles after update:", cryptoNews?.articles);
  }, [cryptoNews]); // Runs when cryptoNews changes


  // Handle loading and errors
  
  if (!cryptoNews?.value) return <p>No news available.</p>;


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
                {news.name}
              </Title>
              <Text>
                {news.description.length > 100 ? news.description.substring(0, 100) + "..." : news.description}
              </Text>
              <div className="news-footer">
              <Avatar src={news.urlToImage} />
              <Text>{news.source?.name}</Text>
                <Text>{moment(news.datePublished).fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;

