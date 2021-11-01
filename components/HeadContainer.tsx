import React from 'react'
import Head from 'next/head'

function HeadContainer({children}) {
    return (
        <Head>            
            {children}            
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet"></link>
        </Head>
    )
}

export default HeadContainer
