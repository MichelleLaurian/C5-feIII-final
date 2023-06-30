import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import DoctorDH from '../assets/doctor.jpg'
import { FavsNo, FavsYes } from "./Icons";

const Card = ({ data }) => {

  const { favDispatch, favState } = useContextGlobal()
  const [favorite, setFavorite] = useState("")

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    if (!favState.favs.includes(data)) {
      favDispatch({ type: 'LIKE', payload: data })
      setFavorite("LIKE")
      alert("Add succesfully")
    } else {

      favDispatch({ type: 'DISLIKE', payload: data })
      setFavorite("DISLIKE")
    }
  }
  return (


    <ul>
      <li>
        <img src={DoctorDH} alt={"Dr." + data.name} />
        <Link to={`/dentista/` + data.id}>
          <div>
            <strong>
              {data.name}
            </strong>
            <p>{data.username}</p>
          </div>
        </Link>
        <div>
          <button
            onClick={addFav}
            className="favButton">
            {favorite === 'LIKE'
              ? <FavsYes />
              : <FavsNo />
            }
          </button>
        </div>
      </li>
    </ul>

  );
};
export default Card;