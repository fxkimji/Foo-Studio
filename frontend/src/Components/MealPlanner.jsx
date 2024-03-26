import React from 'react'
import { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import '../style/Fav.css';
import '../style/Cal.css';

import { useSelector } from 'react-redux';
import axios from 'axios'
export default function MealPlanner() {
  const userData = useSelector(state => state.user)  
  const _id = userData._id;
  const [events, setEvents] = useState([]);
  const[Favourites , setFavourites] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/favourites/${_id}`)
    .then(result =>{
      console.log(result);
      setFavourites(result.data);
    })
    .catch(err => console.log(err))
  },[_id])


  useEffect(() => {
    const containerEl = document.querySelector(".LIST");
    new Draggable(containerEl, {
      itemSelector: ".FavListCard",
      eventData: (eventEl) => {
        return {
          title: eventEl.innerText
        };
      }
    });
  }, []);

  return (
    <div class="main">
    <div class="MealPlanner">
    <div class="favrecipebar">
      <h5>Your Favourites</h5>
      <div class="LIST">
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
              <div class="FavListCard">
                <img src={RecImage} alt={recipeslug}></img>
                <p class="p">{RecipeName}</p>
              </div>
            )
          }
        )
      )}
        </div>
    </div>
    <div class="calender">
    <FullCalendar
    eventBackgroundColor='yellow'
    editable 
    droppable
    selectable
    events={events}
    headerToolbar={{
      end: "dayGridMonth dayGridWeek dayGridDay",
    }}
      plugins={[ dayGridPlugin , interactionPlugin]}
      views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
      initialView="dayGridMonth"
    />
    </div>
    </div>
    </div>
  )
}
