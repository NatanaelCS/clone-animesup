import Footer from '../Footer'
import Header from '../Header'
import { Container } from './styled'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>

        {children}

        <Footer />
      </Container>
    </>
  )
}
