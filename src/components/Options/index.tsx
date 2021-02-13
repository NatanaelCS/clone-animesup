import Link from 'next/link'
import {
  Container,
  ContentHeader,
  Title,
  ContentViews,
  ViewAll,
  ButtonSControll,
  ContentBody,
  OptionsCard,
  PlayImage,
  CardImage,
  CardTitle
} from './styled'



type OptionsProps = {
  title: string
  views: boolean
  arrow: boolean
  border: boolean
}

export default function Options({ title, views, arrow, border }: OptionsProps) {
  return (
    <>
      <Container border={border}>
        <ContentHeader>
          <Title>{title}</Title>

          <ContentViews>
            {views
              ? (
                <ViewAll>

                  <Link href=''>
                    <a>Ver todos</a>
                  </Link>
                </ViewAll>
              )
              : ''
            }

            {arrow
              ? (
                <ButtonSControll>Arrow</ButtonSControll>
              )
              : ''
            }
          </ContentViews>

        </ContentHeader>

        <ContentBody>
          <OptionsCard>
            <PlayImage>
              <CardImage src='https://image.tmdb.org/t/p/w185/kSltzpIOKIjXGWgxc07rzikynvG.jpg' />
            </PlayImage>
            <CardTitle>Hataraku Saibou</CardTitle>
          </OptionsCard>
        </ContentBody>
      </Container>
    </>
  )
}
