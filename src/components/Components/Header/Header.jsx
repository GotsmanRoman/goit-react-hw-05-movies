import { HeaderSection, Container } from './Header.module';
import HeaderNav from './HeaderNav/HeaderNav';

export default function Header() {
  return (
    <HeaderSection>
      <Container>
        <HeaderNav></HeaderNav>
      </Container>
    </HeaderSection>
  );
}
