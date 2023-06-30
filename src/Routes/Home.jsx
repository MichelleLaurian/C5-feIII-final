import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  // const {dentistas} = useContextGlobal()
  const { dentistasState } = useContextGlobal()

  return (
    <>
      <h4>Lista de dentistas</h4>
      <main className='card'>
        {dentistasState.dentistas ?
          dentistasState.dentistas.map(dentista => (
            <Card data={dentista} key={dentista.id} />
          ))
          : null
        }
      </main>
    </>
  )
}

export default Home