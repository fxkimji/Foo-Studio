import React from 'react'
import { FaSquareFacebook , FaXTwitter} from "react-icons/fa6";
import { AiFillAndroid ,AiFillApple } from "react-icons/ai";

export default function Footer() {
  return (
    <div class="footer">
        <div class="follow">
            <FaSquareFacebook/>
            <span class="spaceBetween"></span>
            <FaXTwitter/>
        </div>
        <div class="download">
            <p>Download our app</p>
            <span class="spaceBetween"></span>
            <AiFillAndroid class="icon" />
            <span class="spaceBetween"></span>
            <AiFillApple/>
        </div>
    </div>
  )
}
