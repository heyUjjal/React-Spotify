import {createApi, fetchBaseQuerry} from '@reduxjs/toolkit';
export const shazamCoreApi = createApi({
    reducerPath:"movieApi",

    baseQuerry: fetchBaseQuerry({baseUrl:"https://saavn.me/"}),

    endpoints: (builder) => ({
        getsong: builder.query({
            query: (id) => `songs?id=${id}`
        }),
        gettopchart: builder.query({
            query: () => `modules?language=hindi,english`
        })
    })
        
    
})
export const { useGetsongQuery, usegettopchartQuery} = shazamCoreApi;
