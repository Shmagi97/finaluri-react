import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { HomePageMasiv, Masiv, MasivUniversityName, MasivUniversityPages } from "../masiv/masiv"
import Weather from "../weather/weather"
import { Context } from "../context/context"
import '../header/header.css'

const Header = ()=> {
       
      const getUseRef = useRef()

       const {getname, setGetlink, setGetnumbervalue} = useContext(Context)
        const getName = [... new Set(getname?.map((el)=> el.country)) ]
  
         const [getlinkvalue, setGetlinkvalue] = useState('Ukraine')
          
         let rame = getlinkvalue

         if (getlinkvalue.length > 7){
          rame  =  getlinkvalue.slice(7) 
         
         }  else {rame = getlinkvalue}

        
         
      function getLinkFn (valueFn){
      setGetlink(valueFn)
      
    
      }


 
    return (
        <>
         
         <Masiv/>
          <MasivUniversityName/>
          <MasivUniversityPages/>
          <HomePageMasiv/>
          <header className="headerHeder" ref={getUseRef}>
           
             <nav>  
                 <Link to={'/'} className='link'>Home</Link>
                
                  <select className='homePageOpshenSection' name="" id="" onChange={(event)=> setGetlinkvalue(event.target.value)}>
                      {getName.map((el, index)=> {

                        return <option  key={index} value={el}>
                                  {el}
                               </option>
                      })}
                   </select>
                    
                   <input type="number" placeholder="რაოდენობა"  onChange={(event)=> setGetnumbervalue(event.target.value)}/>  
                   <Link  to={`/${rame}`}  onClick={ ()=> getLinkFn(getlinkvalue) } className='link'> Search  </Link> 
                 
            </nav>
            <div>
              <Weather/>
            </div>
           
          </header>
    

        
        </>
    )
}

export default Header