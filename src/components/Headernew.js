import React from 'react';
import "./Headernew.css";
import svg from "../svg/mainsvg.svg";
function Headernew(){
    return(
        <div>
            <nav className="navbar navbar-expand-md sticky-top w-100">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto"> {/*Here ml-auto means margin left is auto which means your content is aligned to the right hand side*/}
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Desk</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">At glance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Membership</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Downloads</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/*Parallex scrolling effect*/}
            <div className="parallex-new">
                {/* <img src={svg} alt="svgimage" className="Header__svgimage" /> */}
                <div className="input form-group search-field-new">
                    <span className="fa fa-search form-control-feedback-new"></span>
                    <input type="text" className="search-new form-control" placeholder="Search for Doctor's, Clinic's, Services & more.." />
                </div>
            </div>
        </div>
    );
}
export default Headernew;