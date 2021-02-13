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

export default function Cards({ width, url, name, height }: CardsProps) {
  return (
    <>
      <OptionsCard width={width}>
        <PlayImage height={height}>
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
