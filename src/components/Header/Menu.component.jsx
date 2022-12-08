import styled from 'styled-components'
import { paddings } from '../../assets/base/variables'

const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${paddings.large};
  color: currentColor;

  @media(max-width: 940px) {
    display: none;
  }
`



export const Menu = () => {
  return (
    <MenuContainer>
      <li><a href='#'>NÃO VEJO A HORA</a></li>
      <li><a href='#'>AGENDA</a></li>
      <li><a href='#'>CONTATO</a></li>
      <li><a href='#'>LOJA</a></li>
    </MenuContainer>
  )
}