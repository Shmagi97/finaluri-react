import { useContext, useEffect, useState } from 'react'
import '../homePage/homePage.css'
import {  Masiv, MasivUniversityName, MasivUniversityPages } from '../masiv/masiv'
import Weather from '../weather/weather'
import { Context } from '../context/context'
import { Link, useFetcher } from 'react-router-dom'





const HomePage = ()=> {

  // const {page} = useContext(Context)
  
  // const {getname} = useContext(Context)
  // const getName = [... new Set(getname?.map((el)=> el.country)) ]
  
  // const [getlinkvalue, setGetlinkvalue] = useState({})

  // function getLinkFn (valueFn){
  //   setGetlink(valueFn)
    
  // }
 
  return(
    <>
{/*      
         <Masiv/>
          <MasivUniversityName/>
          <MasivUniversityPages/>
         
          <header>
           
              <nav>  
                 <Link to={'/'} className='link'>Home</Link>
                
                 <select className='homePageOpshenSection' name="" id="" onChange={(event)=> setGetlinkvalue(event.target.value)}>
                      {getName.map((el, index)=> {

                        return <option  key={index} value={el}>
                                  {el}
                               </option>
                      })}
                   </select>
                   

                   <Link  to={`/${getlinkvalue}`}  onClick={ ()=> getLinkFn(getlinkvalue) } className='link'> Search  </Link> 
                       
              </nav>
           <div>
              <Weather/>
           </div>
           
          </header>

          
     */}

          <p>eeeeeeeeeeeeeeeee</p>
    </>

    
  )


    
  
}


export default HomePage