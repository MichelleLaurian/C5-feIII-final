import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';

const Detail = () => {

  const { dentistasState, dentistasDispatch } = useContextGlobal()
  const params = useParams()
  const urlDentista = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios.get(urlDentista)
      .then(response => {
        dentistasDispatch({ type: "GET_A_DENTIST", payload: response.data })
      })
  }, [dentistasDispatch, urlDentista])

  const navigate = useNavigate()


  return (
    <>
      <h1>Detail Dentist {dentistasState.dentista.id} </h1>
      <table>
        <td>Nombre</td>
        <td>E-mail</td>
        <td>Tel</td>
        <td>Web</td>
        <tr>
          <th>{dentistasState.dentista.name}</th>
          <th>{dentistasState.dentista.email}</th>
          <th>{dentistasState.dentista.phone}</th>
          <th>{dentistasState.dentista.website}</th>
        </tr>
      </table>

      <button className="back-button" onClick={() => navigate(-1)}>Back</button>

    </>
  )
}

export default Detail