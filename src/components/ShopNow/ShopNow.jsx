import styled from 'styled-components'
import bg from '../../assets/images/gradient-bg.png'
import NVH from '../../assets/images/naovejoahora-album.png'
import { Shop } from './Shop'
import { global, paddings } from '../../assets/base/variables'


const ShopNowBackground = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 100vw;
  padding: ${paddings.medium} 0;

  img {
    width: 300px;
  }
`

const ShopNowContainer = styled.div`
  width: ${global.container};
  margin: 0 auto;
  display: flex;
  justify-content: center;
`



export const ShopNow = () => {
  return (
    <ShopNowBackground>
      <ShopNowContainer>

          <Shop />

          <img src={NVH} alt='Álbum' />

      </ShopNowContainer>
    </ShopNowBackground>
  )
}