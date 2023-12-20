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
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol style={{width: "300px"}}>
            <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex">
                  <MDBTypography tag="h6" className="flex-grow-1">

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

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <MDBTypography
                    tag="h6"
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >

                   {objectGetMasiv.slice(1, 2).map((el, index)=> {
                   
                      return(
                         <p key={index}> {el[1].temp_c} °C </p>
                           )

                          } )}
                   
                  </MDBTypography>
                  
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                    <div>
                      <MDBIcon
                        fas
                        icon="wind fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> 
                      
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