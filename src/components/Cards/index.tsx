import { FaPlay } from 'react-icons/fa'

import {
  OptionsCard,
  PlayImage,
  CardImage,
  CardTitle,
  CardHover
} from './styled'

type CardsProps = {
  name: string
  url: string
  width: boolean
  height: boolean
}

export default function Cards(card: CardsProps) {
  return (
    <>
      <OptionsCard
        style={{
          width: `${card.width ? '257.5px' : '165px'}`
        }}
      >
        <PlayImage
          style={{
            height: `${card.height ? '145.05px' : '231px'}`
          }}
        >
          <CardImage
            style={{
              backgroundImage: `url(${card.url})`
            }}

          >
            <CardHover>
              <FaPlay
                color='#fff'
                className='play' />
            </CardHover>
          </CardImage>
        </PlayImage>
        <CardTitle>{card.name}</CardTitle>
      </OptionsCard>
    </>
  )
}
