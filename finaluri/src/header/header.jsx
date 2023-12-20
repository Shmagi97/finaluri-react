import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Masiv, MasivUniversityName, MasivUniversityPages } from "../masiv/masiv"
import Weather from "../weather/weather"
import { Context } from "../context/context"


const Header = ()=> {
     
     
        const {page} = useContext(Context)
  
       const {getname, setGetlink} = useContext(Context)
        const getName = [... new Set(getname?.map((el)=> el.country)) ]
  
         const [getlinkvalue, setGetlinkvalue] = useState({})

      function getLinkFn (valueFn){
      setGetlink(valueFn)
    
      }
 
    return (
        <>
         
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
                    {/* daamate raodenoba masividan */}
                     <input type="number" />  
              </nav>
           <div>
              <Weather/>
           </div>
           
          </header>
    

        
        </>
    )
}

export default Header