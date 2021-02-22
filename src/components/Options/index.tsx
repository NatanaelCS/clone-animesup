import Link from 'next/link'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import Cards from '../Cards'
import {
  Container,
  ContentHeader,
  Title,
  ContentViews,
  ViewAll,
  ButtonSControll,
  ContentBody,
  ScrollX
} from './styled'


type OptionsProps = {
  title: string
  views: boolean
  arrow: boolean
  border: boolean
  data: [
    name: string,
    url: string
  ]
  width: boolean
  height: boolean
  wrap: boolean
}

export default function Options(option: OptionsProps) {
  const [itens, setItens] = useState([])

  useEffect(() => {
    setItens(option.data)
  }, [])

  return (
    <>
      <Container
        style={{
          borderBottom: `${option.border ? '1px solid rgba(37,37,37,.7)' : '0'}`
        }}
      >
        <ContentHeader>
          <Title>{option.title}</Title>

          <ContentViews>
            {option.views
              ? (
                <ViewAll>
                  <span>28,052</span>
                  <Link href=''>
                    <a>Ver todos</a>
                  </Link>
                </ViewAll>
              )
              : ''
            }

            {option.arrow
              ? (
                <ButtonSControll>
                  <AiFillCaretLeft
                    // onClick={goPrev}
                    className='prev'
                  />
                  <AiFillCaretRight
                    // onClick={goNext}
                    className='next'
                  />
                </ButtonSControll>
              )
              : ''
            }
          </ContentViews>

        </ContentHeader>

        <ContentBody>
          <ScrollX
            style={{
              flexWrap: option.wrap ? 'wrap' : 'nowrap'
            }}
          >
            {itens.map(item => (
              <>
                <Cards name={item.name} url={item.url} width={option.width} height={option.height} />
              </>
            ))}
          </ScrollX>
        </ContentBody>
      </Container>
    </>
  )
}
