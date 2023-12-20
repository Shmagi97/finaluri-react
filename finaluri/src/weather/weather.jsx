import './weather.css'
import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
 
  MDBContainer,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Context } from '../context/context';


 const  Weather = ()=> {
  
 const {filterGetMasiv, rame} = useContext(Context)


//  console.log(filterGetMasiv, 'ffff')

  return (
      
    <section className=" bg-blue-300 h-13 rounded-2xl">

      <MDBContainer className="d-flex justify-between items-center h-13 gap-6">
        
                <div className="">
                  <span  className=" text-xs">
                  {filterGetMasiv.map((el, index)=> {
                    
                     return(
                       <p key={index}> {el[1].interval} </p>
                      )
                    } )}
                  </span>
                  <MDBTypography className=' text-xs'></MDBTypography>
                </div>

                <div className="  ">
                  <span className=" font-weight-bold text-xs">
                  {filterGetMasiv.map((el, index)=> {
                  
                     return(
                       <p key={index}> {el[1].temperature_2m} </p>
                      )
                    } )}
                  </span>
                  <span className=" text-xs">
                  
                  </span>
                </div>

                <div className="d-flex gap-x-10 items-center">
                  <div className="" >
                    <div>
                      <MDBIcon
                       
                   
                      
                      />{" "}
                      <span className=" text-xs"> 
                      
                      {filterGetMasiv.map((el, index)=> {
                  
                     return(
                       <p key={index}> {el[1].wind_speed_10m} </p>
                      )
                    } )}

                        </span>
                    </div>
                    <div>
                      <MDBIcon
                      
                       
                        
                      />{" "}
                      <span className=" text-xs"> 
                        
                      {filterGetMasiv.map((el, index)=> {
                  
                  return(
                    <p key={index}> {el[1].time} </p>
                   )
                 } )}

                      
                       </span>
                    </div>
                    
                  </div>
                  <div>
                    <img className=' w-12'
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                     
                    />
                  </div>
                </div>

      </MDBContainer>
    </section>
  );
}

export default Weather