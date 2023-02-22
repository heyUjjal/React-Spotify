import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const shazamCoreApi = createApi({
    reducerPath:"movieApi",

    baseQuery: fetchBaseQuery({baseUrl:"https://saavn.me/"}),

    endpoints: (builder) => ({
        getsong: builder.query({
            query: (id) => `songs?id=${id}`
        }),
        gettopsongs: builder.query({
            query: (id) => `playlists?id=${id}`
        }),
        getalbumsongs: builder.query({
            query: (id) => `albums?id=${id}`
        })

    })
        
    
})
export const { useGetsongQuery} = shazamCoreApi;
export const { useGettopsongsQuery} = shazamCoreApi;

export const { useGetalbumsongsQuery} = shazamCoreApi;