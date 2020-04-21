// Libraries
import styled from 'styled-components'

// Utils

// Componens
import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
    margin: auto;
`

const Layout = (props) => {
    return (
    <Wrapper>
        <Header />
          {props.children}
        <Footer />
    </Wrapper>
    )
  }
  
  export default Layout