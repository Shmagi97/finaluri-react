import './weather.css'
import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import { Context } from '../context/context';


 const  Weather = ()=> {
  
 const {objectGetMasiv} = useContext(Context)

  return (

    <>
    
    <section className="sectionMtavari bg-blue-300 h-13 rounded-2xl">
  
       <div className='divRelativ'>
          <img className=' w-12'
             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                     
         />
       </div>
       <div className='divAbsolute'>
       
  
      <MDBContainer className="h-100">
        <MDBRow className="">
          <MDBCol style={{width: "300px"}}>
            <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
              <MDBCardBody className="stepHad">
                <div className="step1">
                  <MDBTypography tag="h6" className="">

                  {objectGetMasiv.slice(0, 1).map((el, index)=> {
                   
                     return(
                        <p key={index}> {el[1].name} </p>
                            )
                    } )}
              
               
                  </MDBTypography>
                  <MDBTypography tag="h6">

                  {objectGetMasiv.slice(0, 1).map((el, index)=> {
                   
                   return(
                      <p key={index}> {el[1].localtime} </p>
                          )
                  } )}

                  </MDBTypography>
                </div>

                <div className="step2">
                  <MDBTypography
                    tag="h6"
                    className=""
                    style={{ color: "#1C2331" }}
                  >

                   {objectGetMasiv.slice(1, 2).map((el, index)=> {
                   
                      return(
                         <p key={index}> {el[1].temp_c} °C </p>
                           )

                          } )}
                   
                  </MDBTypography>
                  
                </div>

                <div className="step3">
                  <div className="" style={{fontSize: '1rem'}}>
                    <div>
                      <MDBIcon
                        fas
                        icon="wind fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className=""> 
                      
                      {objectGetMasiv.slice(1, 2).map((el, index)=> {
                   
                        return(
                            <p key={index}> {el[1].wind_kph}   km/h </p>
                          )

                          } )}
                      
                     </span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="tint fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> 84% </span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="sun fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> 0.2h </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                      width="100px"
                    />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>  

       

    </section>
    </>
  );
}

export default Weather