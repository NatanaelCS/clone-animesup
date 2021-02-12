/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Links from '../components/Links'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clone AnimesUp</title>
      </Head>

      <Layout>
        <Links />

      </Layout>
    </>
  )
}
