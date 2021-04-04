import React from 'react';
import "./Specialitiesnew.css";
import image1 from "../images/doctor1.png";
import image2 from "../images/doctor2.png";
import image3 from "../images/doctor3.png";
import image4 from "../images/doctor4.png";

function Specialitynew(){
    return(
        <div>
        <div className="Specialitynew__heading">Trending Specialities<div className="fa fa-angle-right Specialitynew__svg3" /></div>
        <div className="container-fluid Specialitynew__container">
         
            {/*FIRST ROW*/}
            <div className="row Specialitynew__FirstRow">
                <div className="col-md-3 Specialitynew__column"><img alt="specialityphoto" src={image1} className="Specialitynew__Picture"/>
                <div className="Specialitynew__Name">Dermatologist</div>
                </div>
                
    
                <div className="col-md-3 Specialitynew__column"><img alt="specialityphoto" src={image2} className="Specialitynew__Picture" />
                <div className="Specialitynew__Name">Ayurveda</div>
                </div>
                

                <div className="col-md-3 Specialitynew__column"><img alt="specialityphoto" src={image3} className="Specialitynew__Picture" />
                <div className="Specialitynew__Name">Ophtalomologist</div>
                </div>
                

                <div className="col-md-3 Specialitynew__column"><img alt="specialityphoto" src={image4} className="Specialitynew__Picture" />
                <div className="Specialitynew__Name">Neurologist</div>
                </div>
                
            </div>
            
            {/*SECOND ROW*/}
            <div className="row Specialitynew__SecondRow">
                <div className="col-md-4 Specialitynew__column"><img alt="specialityphoto" src={image4} className="Specialitynew__Picture" />
                <div className="Specialitynew__Name">Homeopathy</div>
                </div>
                

                <div className="col-md-4 Specialitynew__column"><img alt="specialityphoto" src={image3} className="Specialitynew__Picture" />
                <div className="Specialitynew__Name">Dietian/<br/>Nutritionist</div>
                </div>
                

                <div className="col-md-4 Specialitynew__column"><img alt="specialityphoto" src={image2} className="Specialitynew__Picture" />
                <div className="Specialitynew__Name">Pediatrition</div>
                </div>
                
            </div>

        </div>
        </div>
    );
}
export default Specialitynew;