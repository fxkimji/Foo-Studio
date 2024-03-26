import React from 'react'
import "../style/components.css"
import isha from '../assets/isha.jpeg'

export default function AboutUs() {
  return (
    <div class="main">
      <div class="about">
      <div claas="abmeimg">
        <img class="ownerimage" src={isha} alt="IM THE OWNER OF DA HOUSE"></img>
      </div>
      <div class="aboutmetext">
      <h1>About Me</h1>
      <div class="intro">
        <span class="hii"><h2>Hiii!!  My Name is</h2></span>
        <span class="myname"><h3>Isha Sahani</h3></span>
        <p>
        
        And Foo Studio is my little corner of the internet!<br />
        I am 20 years old , currenly pursuing my bachelors in computer applications from SOMAIYA VIDYAVIHAR UNIVERSITY <br/>
        This project is for the completion of my undergraduate degree and getting a good score <br/>
        Viva La Vida
        </p>
        </div>
      </div>
      </div>
    </div>
  )
}
