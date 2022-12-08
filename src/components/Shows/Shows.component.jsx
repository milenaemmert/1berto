import styled from 'styled-components'
import HG from '../../assets/images/humberto-tickets.png'
import { TableShows } from './TableShows.component'
import { global, paddings } from '../../assets/base/variables'

const ContainerShows = styled.section`
  padding: ${paddings.large} 0;
  width: ${global.container};
  margin: 0 auto;
  background: url(${HG});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
  display: flex;
  justify-content: flex-end;
`

export const Shows = () => {
  return (
    <ContainerShows>

      <TableShows />
    </ContainerShows>
  )
}