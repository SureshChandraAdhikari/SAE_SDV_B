import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './About.css';


const About=()=>{
    return(<div id="body">
   <span style={{boxShadow:"21px 20px 0 0 rgb(black)"}}>About</span>
   
   <div class="about-section">
    
  <div class="inner-container">

    <h1 style={{color:'white'}}>About Us</h1>
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.
    </p>
    <div class="skills">
      <span>Web Design</span>
      <span>Photoshop & Illustrator</span>
      <span>Coding</span>
    </div>
    <div class="content">
  <div class="stacked">
    <div class="card" style={{fontSize:"7px"}}><span>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </span>
    </div>
    <div class="card" style={{fontSize:'7px'}}><span>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </span>
        </div>
    <div class="card" style={{fontSize:'7px'}}><span>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </span>
        </div>
  </div>
</div>
  </div>
</div>
    <Navbar/>
    <Footer/>
</div>
)
}
export default About;