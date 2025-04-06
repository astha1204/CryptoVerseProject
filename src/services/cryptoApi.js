import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders={
//     'x-rapidapi-key': '4f2d85da9cmsh1ad6b26edea6257p1c8a49jsn53042f4fedbb',
// 		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// }

// const baseUrl='https://coinranking1.p.rapidapi.com'

const createReq=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath: 'cryptoApi',  
    // baseQuery: fetchBaseQuery({ baseUrl }),
    //fetchBaseQuery is a lightweight wrapper around fetch to make API requests.
// The baseUrl is set- meaning all requests will be prefixed with this URL.
baseQuery: fetchBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '4f2d85da9cmsh1ad6b26edea6257p1c8a49jsn53042f4fedbb');
      headers.set('x-rapidapi-host', 'coinranking1.p.rapidapi.com');
      return headers;
    },
  }),

// endpoints is a function that takes builder as an argument.
   
    //   getCryptos: builder.query({
        // query: () => '/posts',
//         getCryptos is an API query (used for fetching data).

// query: () => '/exchanges' defines the URL for this request.

// Since baseUrl is already 'https://jsonplaceholder.typicode.com', the full request URL will be:
// 👉 https://jsonplaceholder.typicode.com/exchanges

// The builder.query function is used for GET requests.

endpoints: (builder) => ({
        getCryptos:builder.query({
            // query:()=>'/coins'  
            query:(count)=>(`/coins?limit=${count}`) 
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>(`/coin/${coinId}`)

        }),
        getCryptoHistory:builder.query({
          query: ({ coinId, timePeriod }) => `/coin/${coinId}/history?timePeriod=${timePeriod}`

      })
      }),
    });

    
// Export hooks for usage in functional components gives all data for query
// also give loading states final states etc while api calling
export const { useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery } = cryptoApi;
//same as name use pehle query end me add krdo







// const options = {
// 	method: 'GET',
// 	hostname: 'coinranking1.p.rapidapi.com',
// 	port: null,
// 	path: '/stats?referenceCurrencyUuid=yhjMzLPhuIDl',
// 	headers: {
// 		'x-rapidapi-key': '4f2d85da9cmsh1ad6b26edea6257p1c8a49jsn53042f4fedbb',
// 		'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// 	}
// };