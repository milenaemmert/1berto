import styled from 'styled-components'
import { Streaming } from '../Streaming/Streaming.component'
import { colors, paddings, global } from '../../assets/base/variables'

const ShopContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  
  span {
    font-weight: bold;
  }

  @media screen and (max-width: 640px) {
    padding: 32px;
    width: 100%;
  }
`

const ShopLink = styled.a`
  width: 60%;
  text-align: center;
  background-color: ${colors.cinder};
  padding: ${paddings.low};
  border-radius: ${global.borderRadius};
  color: ${colors.white};
  font-size: 2em;
  margin-bottom: 16px;

  @media screen and (max-width: 1248px) {
    font-size: 1em;
  }
`

export const Shop = () => {
  return (
    <ShopContainer>
      <ShopLink href='#'>COMPRE AGORA</ShopLink>
  
      <span>DISPONÍVEL TAMBÉM NAS PLATAFORMAS DIGITAIS</span>
      <Streaming />
    </ShopContainer>
  )
}