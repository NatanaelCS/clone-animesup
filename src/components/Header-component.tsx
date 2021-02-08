import React from 'react'
import { BsArrowDown, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineSwap } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'

import { Container } from '../styles/MainComponents'
import { HeaderArea } from '../styles/components/Header-styled'

import logoImage from '../assets/logo3.png'

export default function Header() {
  return (
    <HeaderArea>
      <Container className='container'>
        <div className="logo">
          <img src={logoImage} alt=""/>
        </div>

        <div className="contents-header">
          <div className="nav-bar">
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a >Animes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a >Calendário</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      Gêneros
                      <div className="arrow">
                        <BsArrowDown color='#fff' size={15} />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      Pedidos
                      <div className="arrow ped">
                        <AiOutlineSwap color='#fff' size={14} />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      Discord
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="search">
            <input type="search" placeholder='Pesquisar...'/>
            <FiSearch className='lupa' size={17}/>
            <a href="/">
              <div className="profile">
                <BsFillPersonFill color='#fff' size={23}/>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </HeaderArea>
  )
}
