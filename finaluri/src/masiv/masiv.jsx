import axios from 'axios';
import { useSelector } from 'react-redux';
import { Context } from '../context/context';
import { useContext, useEffect, useMemo } from 'react';



const Masiv = ()=> {
 
    const {setGetmasiv} = useContext(Context)  
   
   useMemo(()=>{

    axios.get(`http://api.weatherapi.com/v1/current.json?key=6fed595429684ee796a184244231912&q=Tbilisi&aqi=no `)
    .then(res => {

        const resdata = res.data
         setGetmasiv(resdata)
        //  console.log(resdata)
    })
 
    .catch((error)=> console.log(error))

   },[])

  
    
}

const MasivUniversityName = () => {

    const { setGetname} = useContext(Context)  
    
    useMemo(()=>{

        axios.get(`http://universities.hipolabs.com/search?country&limit=20`)
        .then(res => {
    
            const resdata = res.data
            setGetname(resdata)
            //   console.log(resdata)
           
         
           
        })
     
        .catch((error)=> console.log(error))
    
       },[])
    
}

const MasivUniversityPages = () => {

    const {getlink, setPage, getnumbervalue} = useContext(Context)  

    useMemo(()=>{

        axios.get(`http://universities.hipolabs.com/search?country=${getlink}&limit=${getnumbervalue}`)
        .then(res => {
    
            const resdata = res.data
            setPage(resdata)
            //   console.log(resdata)
           
         
           
        })
     
        .catch((error)=> console.log(error))
    
       },[getlink, getnumbervalue])
    
}

const HomePageMasiv = () => {

    const {setHomepagemasiv, getnumbervalue} = useContext(Context)  

    useMemo(()=>{

        axios.get(`https://unicatalog.ge/api/unis?locale=ka`)
        .then(res => {
    
            const resdata = res.data
            setHomepagemasiv(resdata)
            //   console.log(resdata)
           
         
           
        })
     
        .catch((error)=> console.log(error))
    
       },[])
    
}


export  {Masiv, MasivUniversityName, MasivUniversityPages, HomePageMasiv}