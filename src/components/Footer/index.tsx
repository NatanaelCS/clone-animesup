import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { FooterArea } from './styled'

export default function Footer() {
  return (
    <FooterArea>
      <div className="info">
        <div className="info--left">
          <div className="contents">
            <div className="h1">
              Links Rápidos
            </div>
            <div className="li">
              <ul>
                <li><a href='/'>Animes</a></li>
                <li><a href='/'>Dublados</a></li>
                <li><a href='/'>Filmes</a></li>
                <li><a href='/'>Calendário</a></li>
              </ul>
              <ul>
                <li><a href='/'>Populares</a></li>
                <li><a href='/'>Cartoons</a></li>
                <li><a href='/'>Chineses</a></li>
                <li><a href='/'>Pedidos</a></li>
              </ul>
            </div>
          </div>

          <div className="contents">
            <div className="h1">
              Parceiros
            </div>
            <div className="li">
              <ul>
                <li><a href='/'>Donghua no Sekai</a></li>
                <li><a href='/'>Discord(Novo)</a></li>
              </ul>
              <ul>
                <li><a href='/'>Animes Heaven</a></li>
                <li><a href='/'>AnimesUp</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="info--right">
          <p>Esse site não hospeda nenhum arquivo de vídeo em seus servidores, apenas cataloga o que já existe na internet.</p>
        </div>
      </div>
      <div className="copy">
        <p>&copy; 2020 AnimesUp - Animes Online. Assistir Animes Online Grátis em FHD e HD, Dublados e Legendados.</p>

        <div className="button">
          <IoIosArrowUp size={19}/>
        </div>
      </div>
    </FooterArea>
  )
}
