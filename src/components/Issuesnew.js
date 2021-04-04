import React from 'react';
import "./Issuesnew.css";
import Issue1 from "../images/issue1.png";
import Issue2 from "../images/issue2.png";
import Issue3 from "../images/issue3.png";
import Issue4 from "../images/issue4.png";

function Issuenew(){
    return(
        <div className="Issuesnew__main-container">
        <div className="Issuesnew__heading">Trending Issues<div className="fa fa-angle-right Issuesnew__svg2" /></div>
        <div className="container-fluid Issuesnew__container">
        
            {/*FIRST ROW*/}
            <div className="row Issuesnew__FirstRow">
                <div className="col-md-3 Issuesnew__column"><img alt="issuephoto" src={Issue1} className="Issuesnew__Picture"/>
                <div className="Issuesnew__Name">Covid</div>
                </div>
                
                <div className="col-md-3 Issuesnew__column"><img alt="issuephoto" src={Issue2} className="Issuesnew__Picture" />
                <div className="Issuesnew__Name">Hairfall</div>
                </div>
               
                <div className="col-md-3 Issuesnew__column"><img alt="issuephoto" src={Issue3} className="Issuesnew__Picture" />
                <div className="Issuesnew__Name">Acne</div>
                </div>
                
                <div className="col-md-3 Issuesnew__column"><img alt="issuephoto" src={Issue4} className="Issuesnew__Picture" />
                <div className="Issuesnew__Name">Diabetes</div>
                </div>
                
            </div>
            
            {/*SECOND ROW*/}
            <div className="row Issuesnew__SecondRow">
                <div className="col-md-4 Issuesnew__column"><img alt="issuephoto" src={Issue4} className="Issuesnew__Picture" />
                <div className="Issuesnew__Name">Knee Pain</div>
                </div>
                
                <div className="col-md-4 Issuesnew__column"><img alt="issuephoto" src={Issue3} className="Issuesnew__Picture" />
                <div className="Issuesnew__Name">Kidney Stone</div>
                </div>
                
                <div className="col-md-4 Issuesnew__column"><img alt="issuephoto" src={Issue2} className="Issuesnew__Picture" />
                <div className="Issuesnew__Name">Weight Loss</div>
                </div>
                
            </div>

        </div>
        </div>
    );
}
export default Issuenew;