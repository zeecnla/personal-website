import { Link } from "gatsby"
import React from "react"
import './css/footer.css'



const Footer = ({ siteTitle }) => (
    <footer>
    <p>check me out!</p>ss
    <ul class="footer">
        <li>
            <a href = "https://github.com/zeecnla" >
                <i class="fab fa-github fa-2x"></i>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/zeecnla/">
                <i class="fab fa-instagram fa-2x"></i>
            </a>
        </li>
        <li>
            <a href="https://medium.com/@zeecnla"> 
                <i class="fab fa-medium fa-2x"></i>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/zeecnla">
                <i class="fab fa-twitter fa-2x"></i>
            </a>
        </li>
    </ul>
    <div class="arr"> © 2018 Cesar Melchor.</div>
</footer>
)
export default Footer
