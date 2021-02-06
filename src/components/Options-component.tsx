import React from 'react'
import { OptionsArea } from '../styles/components/Options-styled'

interface OptionsProps {
  title: string;
  list:{
      title: string;
      image: string
    }
;
}

export default function Options({ title, list }: OptionsProps) {
  return (
    <OptionsArea>
      <h1>{title}</h1>
      <div className="contents">
        <div className="img">
          {list[0].image}
        </div>
        <div className="title">
          {list[0].title}
        </div>
      </div>
    </OptionsArea>
  )
}
