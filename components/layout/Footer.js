// Libaries

// Styles
import { 
  Wrapper, 
  Nav_Wrapper,
  Nav_List,
  Nav_Link,
  Copyright
} from './Footer.styles'

const Footer = () => {
    return (
    <Wrapper>
      <Copyright>© 2020 Syabany Labs. <span className="__whole">All rights reserved.</span></Copyright>
      <Nav_Wrapper>
        <Nav_List>
          <li><Nav_Link href="#">Intro</Nav_Link></li>
          <li><Nav_Link href="#">Siapa kami?</Nav_Link></li>
          <li><Nav_Link href="#">Teknologi</Nav_Link></li>
          <li><Nav_Link href="#">Proyek</Nav_Link></li>
          <li><Nav_Link href="#">Tanya Harga</Nav_Link></li>
        </Nav_List>
      </Nav_Wrapper>
    </Wrapper>
    )
  }
  
  export default Footer