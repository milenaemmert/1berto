import { useState } from 'react'
import styled from 'styled-components'
import { shows } from '../../constants/shows'


const Table = styled.table`
  border: 1px solid black;

  tfoot td {
    background-color: red;
    width: 100%;
  }
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
            <tr>
              <td>{show.date}</td>
              <td>{show.city}</td>
              {show.link ? 
                <td><a href={show.link} target='_blank'>Compre aqui</a></td>
                :
                null
              }
            </tr>

          </tbody>
          <tfoot>
            <tr>
              {show.place}
            </tr>
          </tfoot>
        </Table>
      )
    })
  }

  return (
    <section>
      <h2>AGENDA</h2>
      <h3>Não vejo a hora</h3>


      {handleShows()}

    </section>
  )
}