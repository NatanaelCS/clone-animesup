/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Links from '../components/Links'
import Options from '../components/Options'

import database from '../database/database'

export default function Home({ launch, recentlyAdded }) {
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
          data={launch}
          width={false}
          height={false}
          wrap={false}
        />
        <Options
          title='Adicionados Recentemente'
          views
          arrow={false}
          border
          data={recentlyAdded}
          width
          height
          wrap
        />
        <Options
          title='Filmes'
          views
          arrow
          border
          data={launch}
          width={false}
          height={false}
          wrap={false}
        />
        <Options
          title='Últimos animes Adicionados'
          views
          arrow
          border={false}
          data={launch}
          width={false}
          height={false}
          wrap={false}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const { launch, recentlyAdded } = database;

  return {
    props: {
      launch,
      recentlyAdded
    },
    revalidate: 10
  }
}
