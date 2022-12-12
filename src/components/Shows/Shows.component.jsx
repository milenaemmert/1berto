import styled from 'styled-components'
import HG from '../../assets/images/humberto-tickets.png'
import { TableShows } from './TableShows.component'
import { global, paddings } from '../../assets/base/variables'

const ContainerShows = styled.section`
  width: ${global.container};
  padding: 0 ${paddings.large};
  background: no-repeat url(${HG});
  background-position: left top;
  background-size: 32%;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    max-width: 100vw;
    background-size: contain;
  }

  @media screen and (max-width: 566px) {
    padding: 0 ${paddings.low};
    background-position: center;
    justify-content: center;
  }
`


export const Shows = () => {
  return (
    <ContainerShows>
      <TableShows />
    </ContainerShows>
  )
}