import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Gallery.css'
import SAE1 from "../ASSETS/SAEIMG1.JPG";
import SAE2 from "../ASSETS/SAEIMG2.JPG";
import SAE3 from "../ASSETS/SAEIMG3.JPG";
import SAE4 from "../ASSETS/SAEIMG4.JPG";
import SAE5 from "../ASSETS/SAEIMG5.JPG";
import SAE6 from "../ASSETS/SAEIMG6.JPG";
import SAE7 from "../ASSETS/SAEIMG7.JPG";
import SAE8 from "../ASSETS/SAEIMG8.JPG";
import SAE9 from "../ASSETS/SAEIMG9.JPG";
import SAE10 from "../ASSETS/SAEIMG10.JPG";
import SAE11 from "../ASSETS/SAEIMG11.JPG";
import SAE12 from "../ASSETS/SAEIMG12.JPG";
import SAE13 from "../ASSETS/SAEIMG13.JPG";
import SAE14 from "../ASSETS/SAEIMG14.JPG";
import SAE15 from "../ASSETS/SAEIMG15.JPG";
import SAE16 from "../ASSETS/SAEIMG16.JPG";
import SAE17 from "../ASSETS/SAEIMG17.JPG";
import SAE18 from "../ASSETS/SAEIMG18.JPG";
import SAE19 from "../ASSETS/SAEIMG19.JPG";
import SAE20 from "../ASSETS/SAEIMG20.JPG";
import SAE21 from "../ASSETS/SAEIMG21.JPG";
import SAE22 from "../ASSETS/SAEIMG22.JPG";
import SAE23 from "../ASSETS/SAEIMG23.JPG";
import SAE24 from "../ASSETS/SAEIMG24.JPG";
import SAE25 from "../ASSETS/SAEIMG25.JPG";
import SAE26 from "../ASSETS/SAEIMG26.JPG";
import SAE27 from "../ASSETS/SAEIMG27.JPG";
import SAE28 from "../ASSETS/SAEIMG28.JPG";
import SAE29 from "../ASSETS/SAEIMG29.JPG";
const Gallery=()=>{

return(
    <div className="body">
        <span style={{color:"white"}}>Gallery</span>
        <script src="https://kit.fontawesome.com/ee7a178a15.js" crossorigin="anonymous"></script>
<div class="parent-container">
  <div class="child-container" id="one">
    <img src={SAE3} width="100%" height="auto" />
    <img src={SAE1} width="100%" height="auto"/>
    <img src={SAE2} width="100%" height="auto"/>
    <img src={SAE4} width="100%" height="auto"/>
    <img src={SAE5} width="100%" height="auto"/>
  </div> 
    <div class="child-container" id="two">
       <img src={SAE6} width="100%" height="auto"/>
      <img src={SAE7} width="100%" height="auto"/>
      <img src={SAE8} width="100%" height="auto"/>
      
                                            
  </div>
      <div class="child-container" id="three">
    <img src={SAE9} width="100%" height="auto"/>
        <img src={SAE10} width="100%"  height="auto"/>
        <img src={SAE11} width="100%"  height="auto"/>
        <img src={SAE12} width="100%"  height="auto"/>
         <img src={SAE13} width="100%"  height="auto"/>
        
        
        
  </div>
  </div>
  <div class="parent-container" style={{marginTop:"10px"}}>
  <div class="child-container" id="one">
    <img src={SAE14} width="100%" height="auto"/>
    <img src={SAE15} width="100%" height="auto"/>
    <img src={SAE16} width="100%" height="auto"/>
    <img src={SAE17} width="100%" height="auto"/>
    <img src={SAE18} width="100%" height="auto"/>
    <img src={SAE28} width="100%" height="auto"/>
    <img src={SAE29} width="100%" height="auto"/>
  </div>
    <div class="child-container" id="two">
       <img src={SAE19} width="100%" height="auto"/>
      <img src={SAE20} width="100%" height="auto"/>
      <img src={SAE21}width="100%" height="auto"/>
      
                                            
  </div>
      <div class="child-container" id="three">
    <img src={SAE22} width="100%" height="auto"/>
        <img src={SAE23} width="100%"  height="auto"/>
        <img src={SAE24} width="100%"  height="auto"/>
        <img src={SAE25} width="100%"  height="auto"/>
         <img src={SAE26} width="100%"  height="auto"/>
         <img src={SAE27} width="100%"  height="auto"/>
        
        
  </div>
  </div>

<Navbar/>
<Footer/>
    </div>
)
}
export default Gallery;