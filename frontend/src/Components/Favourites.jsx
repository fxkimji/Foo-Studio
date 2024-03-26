import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "../style/Fav.css"
import { useNavigate } from 'react-router-dom';
import {FaTrash} from 'react-icons/fa'; 
import Popup from './Popup';
import { FavRedux } from '../redux/userSlicer';

export default function Favourites() {

  const [isPopup, setisPopUp] = useState(false)
  const userData = useSelector(state => state.user)  
  const _id = userData._id;
  const[Favourites , setFavourites] = useState([]);
  const navigator = useNavigate()

  const favs = useSelector(state => state)

  useEffect(()=>{
    axios.get(`http://localhost:5000/favourites/${_id}`)
    .then(result =>{
      console.log(result);
      setFavourites(result.data);
    })
    .catch(err => console.log(err))
  },[_id])
  console.log(Favourites)

  const deletefav=(e)=>{
    axios.delete(`http://localhost:5000/deletefav`,{data : {_id, slug}})
    .then(result =>{
      console.log(result)
      alert("Recipe Successfully deleted from favs")
      setisPopUp(false)
      setFavourites(result.data)
    })
    .catch(err => console.log(err))
  }

  const[slug, setdeleteslug] = useState();
  console.log(slug)

  return (
    <div class="main">
      Favourites
      <Popup trigger={isPopup}>
        <div class="popUp">
        <h3>Are you sure you want to remove this amazing recipe from your favourites collection?????</h3><br/>
        <button onClick={(e)=>deletefav()}> Yes</button>
        <button onClick={(e)=>setisPopUp(false)}>no</button>
        </div>
      </Popup>
      <div class="FavList">
      {Favourites && (
        Favourites.map(
          ({
            RecImage,
            RecipeId,
            RecipeName,
            recipeslug
          },
          index)=>{
            return(
              <div class="FavCard" >
                <div class="details" onClick={()=>navigator(`/recipedetails/${recipeslug}`)}>
                <img src={RecImage} alt={recipeslug}></img>
                <h3>{RecipeName}</h3>
                </div>
                <div class="deleteicon" onClick={()=>
                 {
                  setdeleteslug(recipeslug)
                  setisPopUp(true)
                  }}>
                <FaTrash/>
                </div>
              </div>
            )
          }
        )
      )}
      </div>
    </div>
  )
}
