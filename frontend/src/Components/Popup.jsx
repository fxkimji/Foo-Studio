import React from 'react'
import "../style/Fav.css"

export default function Popup(props) {
  return (props.trigger)?
  (
    <div class="popup">
        <div class="popUp-inner">
            <button class="closepopup">❌</button> 
            <br/>
            {props.children}           
        </div> 
    </div>
  )
  :"";
}
