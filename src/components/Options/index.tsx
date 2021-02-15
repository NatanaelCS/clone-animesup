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

export default function Options({ title, views, arrow, border, data, width, height, wrap }: OptionsProps) {
  const [itens, setItens] = useState([])
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    setItens(data)
  }, [])

  function goPrev(): any {
    let prev = scrollX
    prev--

    if (prev < 0) {
      prev = -(185 * 4)

      setScrollX(prev)
    }

    updateMargin()
  }

  function goNext() {
    let prev = scrollX
    prev++

    if (prev > -740) {
      prev = 0

      setScrollX(prev)
    }

    updateMargin()

  }

  function updateMargin() {
    let newMargin = scrollX

    if (newMargin++) {
      newMargin = scrollX + 185

      setScrollX(newMargin)
    } else if (newMargin--) {
      newMargin = scrollX - 185

      setScrollX(newMargin)
    }



  }

  return (
    <>
      <Container border={border}>
        <ContentHeader>
          <Title>{title}</Title>

          <ContentViews>
            {views
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

            {arrow
              ? (
                <ButtonSControll>
                  <AiFillCaretLeft
                    onClick={goPrev}
                    className='prev'
                  />
                  <AiFillCaretRight
                    onClick={goNext}
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
            wrap={wrap}
            style={{
              marginLeft: scrollX
            }}
          >
            {itens.map(item => (
              <>
                <Cards name={item.name} url={item.url} width={width} height={height} />
              </>
            ))}
          </ScrollX>
        </ContentBody>
      </Container>
    </>
  )
}
