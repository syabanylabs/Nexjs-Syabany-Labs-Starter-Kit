// Libaries

// Styles
import { 
  Wrapper, 
  Nav_Wrapper,
  Nav_List,
  Nav_Link,
  Logo,
  RHeader_Wrapper,
  Language_Wrapper
} from './Header.styles'

const Header = () => {
    return (
    <Wrapper>
        <Nav_Wrapper>
          <Nav_List>
            <li><Nav_Link href="#">Intro</Nav_Link></li>
            <li><Nav_Link href="#">Siapa kami?</Nav_Link></li>
            <li><Nav_Link href="#">Teknologi</Nav_Link></li>
            <li><Nav_Link href="#">Proyek</Nav_Link></li>
            <li><Nav_Link href="#">Tanya Harga</Nav_Link></li>
          </Nav_List>
        </Nav_Wrapper>
        <Logo href="#test">
          <img src="../images/syabany-logo.svg" alt="syabany-logo" />
        </Logo>
        <RHeader_Wrapper>
          <p className="__tagline">Solusi digital untuk bisnis Anda</p>
          <Language_Wrapper>
            <img className="__flag" src="../images/flags/flag_id.png" alt="flag-logo"/>
            <span className="__flag_title">Indonesia</span>
          </Language_Wrapper>
        </RHeader_Wrapper>
    </Wrapper>
    )
  }
  
  export default Header