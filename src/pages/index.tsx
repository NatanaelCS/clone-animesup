/* eslint-disable no-use-before-define */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header-component'
import Footer from '../components/Footer-component'
import { Container } from '../styles/MainComponents'
import { HomeArea } from '../styles/pages/Home-page'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>React Setup</title>
      </Head>

      <Header />

      <HomeArea>
      <Container>
        <div className="links">
          <nav>
            <ul>

              <Link href='/'>
                <li>
                  <a>#</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>A</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>B</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>C</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>D</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>E</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>F</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>G</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>H</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>I</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>J</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>K</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>L</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>M</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>N</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>O</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>P</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>Q</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>R</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>S</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>T</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>U</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>V</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>W</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>X</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>Y</a>
                </li>
              </Link>
              <Link href='/'>
                <li>
                  <a>Z</a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>

      </Container>
    </HomeArea>


      <Footer />
    </div>
  )
}

export default Home
