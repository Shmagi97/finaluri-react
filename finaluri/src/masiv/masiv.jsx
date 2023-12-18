import axios from 'axios';
import { useSelector } from 'react-redux';
import { Context } from '../context/context';
import { useContext, useEffect, useMemo } from 'react';


const Masiv = ()=> {
 
    const {setGetmasiv} = useContext(Context)  
   
   useMemo(()=>{

    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    .then(res => {

        const resdata = res.data
         setGetmasiv(resdata)
     
     
     //   console.log(data)
    })
 
    .catch((error)=> console.log(error))

   },[])

  
    
}

const MasivUniversity = () => {
    
    useMemo(()=>{

        axios.get(`http://universities.hipolabs.com/search?country=Georgia`)
        .then(res => {
    
            const resdata = res.data
          
         
         
        //    console.log(res)
        })
     
        .catch((error)=> console.log(error))
    
       },[])
    
}

export  {Masiv, MasivUniversity}