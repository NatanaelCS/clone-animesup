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
  ContentBody
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

  useEffect(() => {
    setItens(data)
  }, [])

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
                  <AiFillCaretLeft />
                  <AiFillCaretRight />
                </ButtonSControll>
              )
              : ''
            }
          </ContentViews>

        </ContentHeader>

        <ContentBody wrap={wrap}>

          {itens.map(item => (
            <>
              <Cards name={item.name} url={item.url} width={width} height={height} />
            </>
          ))}
        </ContentBody>
      </Container>
    </>
  )
}
