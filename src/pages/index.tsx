/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Links from '../components/Links'
import Options from '../components/Options'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clone AnimesUp</title>
      </Head>

      <Layout>
        <Links />
        <Options
          title='Lançamentos'
          views={false}
          arrow
          border
        />
        <Options
          title='Adicionados Recentemente'
          views
          arrow={false}
          border
        />
        <Options
          title='Filmes'
          views
          arrow
          border
        />
        <Options
          title='Últimos animes Adicionados'
          views
          arrow
          border={false}
        />
      </Layout>
    </>
  )
}
