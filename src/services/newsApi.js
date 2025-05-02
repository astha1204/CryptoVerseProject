// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // const options = {
// // 	method: 'GET',
// // 	hostname: 'bing-news-search1.p.rapidapi.com',
// // 	port: null,
// // 	path: '/news?safeSearch=Off&textFormat=Raw',
// // 	headers: {
// // 		'x-rapidapi-key': '4f2d85da9cmsh1ad6b26edea6257p1c8a49jsn53042f4fedbb',
// // 		'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
// // 		'X-BingApis-SDK': 'true'
// // 	}
// // };

// export const newsApi=createApi({
//     reducerPath: 'newsApi', 
//     baseQuery:fetchBaseQuery({
//         baseUrl:'https://newsapi.org/v2/',
//         prepareHeaders: (headers) => {
//             headers.set('Authorization', '9fd797c55ea4472596c82b006765014a'); // Use your NewsAPI.org key
//             return headers;
//           },
        
//     }),
//     endpoints: (builder) => ({
//         getNews:builder.query({
//             query:({newsCategory,count})=>(`everything?q=${encodeURIComponent(newsCategory)}&pageSize=${count}`),
            
            
//         })
//       }),
// }) 

// export const { useGetNewsQuery } = newsApi;
// services/newsApi.js


//Aastha
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const newsApi = createApi({
//   reducerPath: 'newsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://newsapi.org/v2/',
//     prepareHeaders: (headers) => {
//       headers.set('Authorization', '9fd797c55ea4472596c82b006765014a'); // 🔐 Replace with your NewsAPI key
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getNews: builder.query({
//       query: ({ newsCategory = 'crypto', count = 10 }) =>
//         `everything?q=${encodeURIComponent(newsCategory)}&pageSize=${count}&sortBy=publishedAt&language=en`,
//     }),
//   }),
// });

// export const { useGetNewsQuery } = newsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/',
    prepareHeaders: (headers) => {
      headers.set('X-Api-Key', '9fd797c55ea4472596c82b006765014a'); // Use your NewsAPI.org key
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory = 'crypto', count = 10 }) =>
        `everything?q=${encodeURIComponent(newsCategory)}&pageSize=${count}&sortBy=publishedAt&language=en`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;