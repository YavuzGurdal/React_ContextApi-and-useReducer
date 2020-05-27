/*
// genelde bu 3'lu yapi kullaniliyor. kodlari bu 3 asmaya gore kurgulamak gerekiyor
FETCH_REQUEST
FETCH_SUCCESS
FETCH_FAIL
*/

import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: false,
    error: "",
    post: {}
}

const reducer = (state, action) => { // component disinda yazabilirim
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {
                loading: true,
                error: "",
                post: {}
            }

        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: "",
                post: action.payload
            }

        case 'FETCH_FAIL':
            return {
                loading: false,
                error: "Something went wrong",
                post: {}
            }

        default:
            return state;
    }
}

function DataFetching() {

    const [x, dispatch] = useReducer(reducer, initialState) // x initialState'i temsil ediyor. icndekilerle beraber hepsini

    useEffect(() => { // component icinde yazmam gerekiyor.
        dispatch({ type: 'FETCH_REQUEST' })
        axios
            .get("https://jsonplaceholder.typicode.com/posts/15")
            .then(res => dispatch({ type: 'FETCH_SUCCESS', payload: res.data }))
            .catch(err => dispatch({ type: 'FETCH_FAIL' }))

    }, [])

    return (
        <div>
            {x.loading ? "Loading..." : x.post.body}
            {x.error ? x.error : null}
        </div>
    )
}

export default DataFetching
