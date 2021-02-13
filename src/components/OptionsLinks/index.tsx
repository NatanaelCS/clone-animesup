import Link from "next/link";

import { AiFillCaretRight } from 'react-icons/ai'

import { Container, ContainerLink } from './styled'

export default function OptionsLinks({ title, links }) {
  return (
    <>
      <Container>
        <Link href=''>
          <a>{title}</a>
        </Link>
      </Container>

      <ContainerLink>
        <AiFillCaretRight color='#777' />
        <Link href=''>
          <a>{links}</a>
        </Link>
      </ContainerLink>
    </>
  )
}
