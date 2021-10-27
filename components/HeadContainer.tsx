import React from 'react'
import Head from 'next/head'

function HeadContainer(children) {
    return (
        <Head>
            {children}
        </Head>
    )
}

export default HeadContainer
