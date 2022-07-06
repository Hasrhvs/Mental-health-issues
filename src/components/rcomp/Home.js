import React from 'react'
import '../../App.css'
import { Link } from "react-router-dom";

export default function home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img id="col1img" src={require('../../images/4.png')} alt="one" />
                    </div>
                    <div className="col" id="homecol2">
                        <h1>What Is Mental Health?</h1>
                        <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</p>
                        <h2>Are You Mentally Fit?</h2>
                      <Link to="/Quiz" ><button className="fitbtn">Check Here</button></Link> 
                    
                    </div>
                </div>
            </div>

            <div className="container my-5" id="container2">
                <div className="row">
                    <div className="col" id="cnt2col">Stress Disorder</div>
                    <div className="col" id="cnt2col">Anxiety Disorders</div>
                    <div className="col" id="cnt2col">Suicidal Behavior</div>
                    <div className="col" id="cnt2col">Psychotic Disorders</div>
                </div>
            </div>


                <div className="container my-5" id="container3">
                    <div className="row">
                        <div className="col">
                            <h1>Early Warning Signs</h1>
                            <p>Not sure if you or someone you know is living with mental health problems? Experiencing one or more of the following feelings or behaviors can be an early warning sign of a problem:</p>
                            <ul>
                                <li><i className="container3icon">&#9888;  </i>  Eating or sleeping too much or too little</li>
                                <li><i className="container3icon">&#9888;  </i>  Pulling away from people and usual activities</li>
                                <li><i className="container3icon">&#9888;  </i>  Having low or no energy</li>
                                <li><i className="container3icon">&#9888;  </i>  Feeling numb or like nothing matters</li>
                                <li><i className="container3icon">&#9888;  </i>  Having unexplained aches and pains</li>
                                <li><i className="container3icon">&#9888;  </i>  Feeling helpless or hopeless</li>
                                <li><i className="container3icon">&#9888;  </i>  Feeling unusually confused, forgetful, on edge, angry, upset, worried, or scared</li>
                                <li><i className="container3icon">&#9888;  </i>  Yelling or fighting with family and friends</li>
                                <li><i className="container3icon">&#9888;  </i>  Experiencing severe mood swings that cause problems in relationships</li>
                                <li><i className="container3icon">&#9888;  </i>  Inability to perform daily tasks like taking care of your kids or getting to work or school</li>
                            </ul>
                        </div>
                        <div className="col" id="homecol3">
                            <img id="col1img2" src={require('../../images/5.png')} alt="one" />
                        </div>
                    </div>
                </div>



                <div className="container my-5" id="container3">
                    <div className="row">
                        <div className="col">
                        <img id="col1img2" src={require('../../images/brain.png')} alt="one" />
                        </div>
                        <div className="col" id="homecol3">
                        <h1>Mental Health and Wellness</h1>
                            <p>Ways to maintain positive mental health include:</p>
                            <ul>
                                <li><i className="container3icon">&#129496;  </i>Getting professional help if you need it  </li>
                                <li><i className="container3icon">&#129496;  </i>Connecting with others  </li>
                                <li><i className="container3icon">&#129496;  </i> Staying positive </li>
                                <li><i className="container3icon">&#129496;  </i> Getting physically active </li>
                                <li><i className="container3icon">&#129496;  </i> Helping others </li>
                                <li><i className="container3icon">&#129496;  </i> Getting enough sleep </li>
                                <li><i className="container3icon">&#129496;  </i>  Developing coping skills </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>


        </>

    )
}
