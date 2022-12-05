import styled from 'styled-components'
import bg from '../../assets/images/gradient-bg.png'
import NVH from '../../assets/images/naovejoahora-album.png'
import { Shop } from './Shop'


const ShopNowContainer = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    width: 32px;
  }
`

export const ShopNow = () => {
  return (
    <ShopNowContainer>
      <Shop />

      <img src={NVH} alt='Álbum' />
    </ShopNowContainer>
  )
}