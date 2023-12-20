
import HomePage from '../homePage/homePage'
import './App.css'
import {  Link, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../context/context';
import { useEffect, useMemo, useState } from 'react';
import University from '../homePage/universityPage';
import NotFound from '../notFound/notFound';
import { Masiv, MasivUniversityName, MasivUniversityPages, } from '../masiv/masiv';
import Weather from '../weather/weather';

function App() {
  
  const [getmasiv, setGetmasiv] = useState([])
  const [getlinkvalue, setGetlinkvalue] = useState({})
  const [getlink, setGetlink] = useState([])
  const [getname, setGetname] = useState([])
   const [page, setPage] = useState([])

  
  const getName = [... new Set(getname?.map((el)=> el.country)) ]

  const objectGetMasiv = Object.entries(getmasiv)
 
  const filterGetMasiv = objectGetMasiv?.filter((el,index)=> {
    if (  el[0] === "current" || el[0] ===  "current_units"){
      return true
    } else {return false}
  })


  function getLinkFn (valueFn){
    setGetlink(valueFn)
    
  }

 
 
  // console.log(getlinkvalue)

  // const countMasiv = useSelector(state=> state.count)
  // const dispatch = useDispatch()  

  return (
    <>

    {/* <button onClick={()=> dispatch({type : 'INCREMENT'})}>mimateba</button>
     <br></br>
    <button onClick={()=> dispatch({type : 'DICREMENT'})}>gamokleba</button>
      
      {countMasiv} */}
      
  <Context.Provider value={{
     setGetmasiv,
     filterGetMasiv,
     setGetlinkvalue,
     getlinkvalue,
     setGetname,
     setPage,
     page,
     getlink,
    
   }}>
     
   <main className="homePageMain">
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

            <Weather/>
          </header>
    
       
      <section >

      <Routes>
        <Route path='/' element = {<HomePage/>}> </Route> 
        <Route path='/:page' element = {<University/> }> </Route> 
        <Route path='*' element = {<NotFound/>}> </Route> 
      </Routes>

   
    </section>
    </main>

    </Context.Provider>
    </>
  )
}

export default App
