import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Home.css';
import Sdv from '../ASSETS/sdv.jpeg';
import sdv from '../ASSETS/kirrack.png';
import veh from '../ASSETS/vehicle.jpg'

const Home=()=>{
   return( <div >
    



<body>
    <div className="container">
        <nav id="navbar">
            
            <div className="nav-logo">

            </div>
        </nav>
        <div className="content">
            <h3>SELF DRIVING VEHICLES</h3>
            <h1>Neccesity is the mother of Invention</h1>
            <p>Self-driving cars will enable car-sharing even in spread-out suburbs. <br/>A car will come to you just when you need it. <br/>And when you are done with it, the car will just drive away,<br/>So you won’t even have to look for parking.</p>
        </div>


    </div>
    <div className="context textcenter ">

        <h3 className="textgreen">How SDV Revolutionize</h3>



        <h2>INNOVATE TOGETHER <br/>FOR A BETTER WORLD</h2>
        <p>Artificial Intelligence has changed how many actions are performed by individuals, leading to what one could call a digital revolution. <br/>
        Self-driving cars are part of this new revolution and appear as one of the most promising technologies in our society.<br/>
        The equipment of these vehicles with Artificial Intelligence systems run by sophisticated algorithms might change forever how transportation and driving are conceived by humanity.<br/>
        This technological advancement in the automobile industry has demonstrated the significant advantages that society will benefit from, including enhanced safety, increased mobility, and environmental impact.
        </p>

    </div>
    <div className="container2">
        <div className="fern">
            <img src={Sdv}alt=""/>

        </div>


        <div className="context2">

            <div className="ferncontext">
                <h3 className="textgreen">About Us</h3>
                <h3 className="lightertext">SAE International is a professional association and standards development organization for the engineering industry, with a special focus on transport sectors such as automotive, aerospace and commercial vehicles. The organization was originally established as the Society of Automotive Engineers.</h3>
                <p>We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur.— The vibrant college life is incomplete without a fest and constitutes a major part of the life of students. It etches a mark on the academic calendar and students look forward to the dates..
                The club annually organizes the TEDx, "ideas worth spreading".We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
              Even if Automobile is not quite your speed, we have numerous other events that let you try out technology without all its intricacies. With events like Conquesto, Auto Sharks and many other, there is something for everyone
                </p>

            </div>
            <div className="progressbars">

                <div className="progress-status">
                    <div className="ninty">
                        <div className="progress blue">
                            <div className="progress-left">
                                <div className="progress-value">90%</div>
                            </div>
                            <div className="progress-right">
                            </div>
                        </div>
                        <h4>Nitro Booster</h4>
                    </div>

                </div>



                <div className="progress-status-green">
                    <div className="eighty">
                        <div className="progress-green">
                            <div className="progress-left-green">
                                <div className="progress-value-green">80%</div>
                            </div>
                            <div className="progress-right-green"></div>
                        </div>
                        <h4>Battery</h4>
                    </div>

                </div>





                <div className="progress-status-golden">
                    <div className="seventyfive">
                        <div className="progress-golden">
                            <div className="progress-left-golden">
                                <div className="progress-value golden">75%</div>
                            </div>
                            <div className="progress-right-golden"></div>
                        </div>
                        <h4>Efficiency</h4>
                    </div>
                </div>

            </div>
        </div>
    </div>


   




    <div className="forest">

        <div className="forest__context">
            <div className="forest--text">
                <div className="forest__paragraph">
                </div>
                <div className="forest__heading">
                    
                    <h1>What is SDV?</h1>
                </div>
            </div>
        </div>

        <div className="forest--boxes">

            <div className="box1">
                <span><i className="fab fa-pagelines"></i></span>
                <h2>Autonomouse Vehicles</h2>
                <p>Self-driving vehicles are cars or trucks in which human drivers are never required to take control to safely operate the vehicle. Also known as autonomous or “driverless” cars, they combine</p>
            </div>




            <div className="box1">
                 <span><i className="fa-solid fa-paw"></i></span>
                <h2>Layers of autonomy
                </h2>
                <p>Different cars are capable of different levels of self-driving, and are often described by researchers on a scale 0-5.
                    <ul>

<li>.Level 0</li>
<li>.Level 2</li>
<li>.Level 3</li>
<li>.Level 4</li>
<li>.Level 5</li>
</ul></p>
            </div>

            <div className="box1">
                <span><i className="fas fa-tree"></i></span>
                <h2>Impacts</h2>
                <p>The costs and benefits of self-driving cars are still largely hypothetical. More information is needed to fully assess how they’ll impact drivers, the economy, equity, and environmental and public health.

Safety is an overarching concern.</p>
            </div>

            <div className="box1">
                <span><i className="fas fa-tint"></i></span>
                <h2>The 6 Core Components of Any Self Driving Car </h2>
                <p>1. Computer Vision <li/>2. Sensor Fusion  <li/>3. Radar  <li/>4. LiDAR  <li/>5. Path Planning  <li/>6. Control</p>
            </div>

            <div className="box1">
                <span><i className="fab fa-envira"></i></span>
                <h2>Cars with self-driving features</h2>
                <p>Hands-free steering centers the car without the driver's hands on the wheel. The driver is still required to pay attention.
Adaptive cruise control (ACC) automatically maintains a selectable distance between the driver's car and the car in front.
</p>
            </div>


            <div className="box1">
                <span><i className="far fa-snowflake"></i></span>
                <h2>Advantages</h2>
                <p>Reduce traffic congestion (30% fewer vehicles on the road) Cut transportation costs by 40% (in terms of vehicles, fuel, and infrastructure) Improve walkability and livability. Free up parking lots for other uses (schools, parks, community centers)</p>
            </div>


        </div>
    </div>

    <div className="about">

        <div className="about__context">
            <div className="about--text">

              
                <div className="about__paragraph">
                </div>

            </div>
        </div>

        <div className="about__images">
            <div className="about__container">
                <div className="about--imgcolumn1">
                    <span><img className="about__outerimage" src="https://raw.githubusercontent.com/Nis-chal/web-dev/main/images/g1.jpg" alt=""/></span>
                    <div className="about__imgrow1">
                        <span><img className="about__innerimage" src="https://raw.githubusercontent.com/Nis-chal/web-dev/main/images/g2.jpg" alt=""/></span>
                        <span><img className="about__innerimage" src="https://raw.githubusercontent.com/Nis-chal/web-dev/main/images/g3.jpg" alt=""/></span>
                    </div>
                    <span><img className="about__outerimage" src=" https://raw.githubusercontent.com/Nis-chal/web-dev/main/images/g7.jpg" alt=""/></span>
                </div>
                <div className="about--imgcolumn2">
                    <div className="about__imgrow2">
                        <span><img src="https://raw.githubusercontent.com/Nis-chal/web-dev/main/images/g4.jpg" alt=""/></span>
                        <span><img src="https://raw.githubusercontent.com/Nis-chal/web-dev/main/images/t3.jpg" alt=""/></span>
                    </div>
                    <div className="about__imgrow2">
                        <span><img src="https://raw.githubusercontent.com/Nis-chal/web-dev/main/images/g4.jpg" alt=""/></span>
                        <span><img src="https://raw.githubusercontent.com/Nis-chal/web-dev/main/images/g5.jpg" alt=""/></span>
                    </div>
                    <div className="about__row3">
                        <span><img src="https://raw.githubusercontent.com/Nis-chal/web-dev/main/images/g6.jpg" alt=""/></span>
                    </div>
                </div>
            </div>

        </div>
        <div className="about__heading">
                    <h1 style={{color:"White"}}>Faculty Advisors</h1>
                </div>
    </div>  
</body>
<div className="res">

    <div className="box">
        <div className="imgBx">`
          
           <img src="https://nitdgp.ac.in/uploads/n_banerjee.jpg" alt="N.Banarjee" style={{height: "255px"}}/>

        </div>
        <div className="content1" style={{color:"red"}}>
            <h2 style={{color:"red"}}>
                Prof. N.Banarjee<br/> <span>Department of Mechanical Engineering</span>
            </h2>
        </div>
    </div>

    <div className="box">
        <div className="imgBx">
          <img src="https://www.saenitdgp.com/static/media/apurba_layek.3906b4c4f745101583d5.jpg" alt="231126101-911076139754522-7484519527974557320-n-modified" style={{height: "255px"}} />

        </div>
        <div className="content1" style={{color:"red"}}>
            <h2 style={{color:"red"}}>
               Prof. Apurba Layek<br/> <span>Department of Mechanical Engineering</span>
            </h2>
        </div>
    </div>
    <div className="box">
        <div class="imgBx" > 
 <img src="https://nitdgp.ac.in/uploads/a8de5832739d616eafad090c7efce0b9.jpg" alt="billgate" style={{height: "255px"}}/> </div>
        <div class="content1"  style={{color:"red"}}>
            <h2 style={{color:"red"}}>
                Prof. Tapas Kumar Saha<br/> <span>Department of Electrical Engineering</span>
            </h2>
        </div>
    </div>
  </div>


    <Navbar/>
    <Footer/>
    </div>
   )
}
export default Home;
