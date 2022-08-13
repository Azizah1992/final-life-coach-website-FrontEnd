import "../styles/Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from "react";

export function Footer()
{
    return(
        <div>
        

            <footer>
		{/* <ul> */}
           
			
			{/* <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
			<li><a href="#"><i className="fa fa-snapchat-square"></i></a></li>
			<li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
		<li><a href="#"><i className="fa fa-github-square"></i></a></li> */}
 <div className="footer-icon">
{/* <TwitterIcon  /> 
<FacebookIcon  />
<InstagramIcon/>
<YouTubeIcon/> */}
 {/* <IoLogoSnapchat/> */}


 <ul className="wrapper">
  <li className="icon facebook">
    <span className="tooltip">Facebook</span>
    <span><i className="fab fa-facebook-f"><FacebookIcon  /></i></span>
  </li>
  <li className="icon twitter">
    <span className="tooltip">Twitter</span>
    <span><i className="fab fa-twitter"><TwitterIcon  /> </i></span>
  </li>
  <li className="icon instagram">
    <span className="tooltip">Instagram</span>
    <span><i className="fab fa-instagram"><InstagramIcon/></i></span>
  </li>
  {/* <li className="icon github">
    <span className="tooltip">Github</span>
    <span><i className="fab fa-github"></i></span>
  </li> */}
  <li className="icon youtube">
    <span className="tooltip">Youtube</span>
    <span><i className="fab fa-youtube"><YouTubeIcon/></i></span>
  </li>
</ul>
</div>

          
		{/* </ul> */}
		<p>Your Online Life Coach - All rights reserved - Copyright © 2022</p>
		<p>Website Built & Managed by Webseco.com</p>
	</footer>

        </div>
    )
}