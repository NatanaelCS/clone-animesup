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
}

export default function Cards({ name, url }: CardsProps) {
  return (
    <>
      <OptionsCard>
        <PlayImage>
          <CardImage src={url}>
            <CardHover>
              <FaPlay
                color='#fff'
                className='play' />
            </CardHover>
          </CardImage>
        </PlayImage>
        <CardTitle>{name}</CardTitle>
      </OptionsCard>
    </>
  )
}
