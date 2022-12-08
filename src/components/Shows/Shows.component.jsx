import styled from 'styled-components'
import HG from '../../assets/images/humberto-tickets.png'
import { TableShows } from './TableShows.component'

const ContainerShows = styled.section`
  background: url(${HG});
`

export const Shows = () => {
  return (
    <ContainerShows>

    <TableShows />
    </ContainerShows>
  )
}