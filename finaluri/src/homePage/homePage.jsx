import { useContext, useEffect } from 'react'
import '../homePage/homePage.css'
import {  Masiv } from '../masiv/masiv'
import Weather from '../weather/weather'
import { Context } from '../context/context'
import { Link, useFetcher } from 'react-router-dom'




const HomePage = ()=> {
  
  const {setGethomemasiv} = useContext(Context)
 

  // useEffect(()=> {
  //   const listCountvri = [
     
      
  //     {
  //       title: 'pirveli',
  //       description: "pirvelis shesaxeb"
  //     }, 
  
  //     {
  //       title:  'meore',
  //       description: 'meores shesaxeb'
  //     },
  
  //     {
  //       title:  'mesame',
  //       description: 'mesames shesaxeb'
  //     }
  
  
       
  //    ]

  //    setGethomemasiv(listCountvri)
  //   //  console.log(listCountvri)

   

  //  return listCountvri.map((el)=> <Link to={el.title}>{el.title}</Link>)

  // },[])
   
 

   
  

  
    // return (
    //   <div>home page</div>
    // )
  

    
  
}


export default HomePage