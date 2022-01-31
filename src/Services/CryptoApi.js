import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '95ef68e9d2mshbd4d35bdd1948e0p13ba37jsn06bceea9e6d3'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoAPI = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});
export const {
    useGetCryptosQuery
} = cryptoAPI;