import React from 'react';
import "./Cardsnew.css";
// import svg1 from "../svg/arrow.svg";
import doctor1 from "../images/doctor1.png";
import doctor2 from "../images/doctor2.png";
import doctor3 from "../images/doctor3.png";
import doctor4 from "../images/doctor4.png";

function Cardsnew(){
    return(
        <div className="Cardsnew__container">
        <div className="Cardsnew__heading">My Doctors<div className="fa fa-angle-right Cardsnew__svg1" /> </div>
        <div className="container-fluid">
         
            {/*FIRST ROW*/}
            <div className="row Cardsnew__FirstRow">
            
            {/*First Column of First Row*/}
            <div className="col-md-6 col-sm-12">
                <div>
                    <img className="Cardsnew__LeftDoctors" src={doctor1} alt="doctor1"/>
                </div>
                <div className="Cardsnew__LeftNames">
                    <p className="Cardsnew__name">Dr. Namita Kalyani Bhansaki Sushil Karyakram</p>
                    <p className="Cardsnew__post">Neurosurgeon, Oncologist, ENT Specialist</p>
                    <p className="Cardsnew__address">Bandra (W)</p>
                </div>
                <div className="Cardsnew__Leftbutton">
                    <div type="button" className="btn btn-success">Call</div><br />
                    <div type="button" className="btn btn-success">Book</div>
                </div>
            </div>

            {/*Second Column of First Row*/}
            <div className="col-md-6 col-sm-12 ">
            <div>
                    <img className="Cardsnew__RightDoctors" src={doctor2} alt="doctor1"/>
                </div>
                <div className="Cardsnew__RightNames">
                    <p className="Cardsnew__name">Dr. Swapnil Krishnakant Katare</p>
                    <p className="Cardsnew__post">Neurosurgeon, Oncologist, ENT Specialist</p>
                    <p className="Cardsnew__address">Bandra (W)</p>
                </div>
                <div className="Cardsnew__button">
                    <div type="button" className="btn btn-success">Call</div><br />
                    <div type="button" className="btn btn-success">Book</div>
                </div>
            </div>
            </div>
            
            <br /><br /><br />
            {/*SECOND ROW*/}
            <div className="row Cardsnew__SecondRow">

                {/*First column of Second rwo*/}
                <div className="col-md-6 col-sm-12">
                <div>
                    <img className="Cardsnew__LeftDoctors" src={doctor3} alt="doctor1"/>
                </div>
                <div className="Cardsnew__LeftNames">
                    <p className="Cardsnew__name">Dr. Namita Kalyani Bhansaki Sushil Karyakram</p>
                    <p className="Cardsnew__post">Neurosurgeon, Oncologist, ENT Specialist</p>
                    <p className="Cardsnew__address">Bandra (W)</p>
                </div>
                <div className="Cardsnew__Leftbutton">
                    <div type="button" className="btn btn-success">Call</div><br />
                    <div type="button" className="btn btn-success">Book</div>
                </div>
                </div>
                
                {/*Second column of second row*/}
                <div className="col-md-6 col-sm-12">
                <div>
                    <img className="Cardsnew__RightDoctors" src={doctor4} alt="doctor1"/>
                </div>
                <div className="Cardsnew__RightNames"><br />
                    <p className="Cardsnew__name">Dr. Pooja Gajera</p>
                    <p className="Cardsnew__post">Neurosurgeon</p>
                    <p className="Cardsnew__address">Bandra (W)</p>
                </div>
                <div className="Cardsnew__button">
                    <div type="button" className="btn btn-success">Call</div><br />
                    <div type="button" className="btn btn-success">Book</div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Cardsnew;