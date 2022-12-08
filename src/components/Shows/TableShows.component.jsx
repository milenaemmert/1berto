import { useState } from 'react'
import styled from 'styled-components'
import { shows } from '../../constants'
import { colors, paddings } from '../../assets/base/variables'

const SectionShows = styled.section`
  h2 {
    font-size: 4em;
    font-weight: bold;
    color: ${colors.cinder};
  }
  h3 {
    font-weight: bold;
    color: ${colors.cinder};
  }
  a {
    color: ${colors.cinder};
    font-size: .8em;
  }
  a:hover {
    text-decoration: underline;
  }

  
`

const Table = styled.table`
  
`

const TdBig = styled.td`
  font-size: 2em;
  font-weight: bold;
  color: ${colors.white};
  padding: 0 ${paddings.large} 0 0;
`

const TdSmall = styled.td`
  color: ${colors.cinder};
  padding: 0 0 0 0;
  
  a {
    color: ${colors.cinder};
    font-size: .8em;
  }
  a:hover {
    text-decoration: underline;
  }
`

const TRow = styled.tr`
  padding-bottom: ${paddings.large};
`

export const TableShows = () => {
  const [showsState, setShowsState] = useState(shows)
  console.log()

  const handleShows = () => {
    console.log(showsState)

    return showsState.map(show => {
      return (
        <Table>
          <tbody>
            <TRow>
              <TdBig>{show.date}</TdBig>
              <TdBig>{show.city}</TdBig>
              {show.link ? 
                <TdSmall><a href={show.link} target='_blank'>Compre aqui</a></TdSmall>
                :
                null
              }
            </TRow>

          </tbody>
          <TRow>
            <TdSmall>
              {show.place}
            </TdSmall>
          </TRow>
        </Table>
      )
    })
  }

  return (
    <SectionShows>
      <h2>AGENDA</h2>
      <h3>Não vejo a hora</h3>


      {handleShows()}

    </SectionShows>
  )
}