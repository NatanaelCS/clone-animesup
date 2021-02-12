import React from 'react'
import { BsArrowDown, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineSwap } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

import { HeaderArea, Container, Logo, ContentHeader } from './styled'

import logoImage from '../../images/logo3.png'
import Link from 'next/link'

export default function Header() {
  return (
    <HeaderArea>
      <Container>
        <Logo>
          <Link href='/'>
            <a>
              <div className="logo">
                <img src={logoImage} alt=""/>
              </div>
            </a>
          </Link>
        </Logo>

        <ContentHeader>
          <div className="nav-bar">
            <nav>
              <ul>
                <li>
                  <Link href='/'>
                    <a>
                      Animes
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a>
                      Calendário
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a>
                      Gêneros
                      <div className="arrow">
                        <BsArrowDown color='#fff' size={15} />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a>
                      Pedidos
                      <div className="arrow ped">
                        <AiOutlineSwap color='#fff' size={14} />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
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
        </ContentHeader>
      </Container>
    </HeaderArea>
  )
}
