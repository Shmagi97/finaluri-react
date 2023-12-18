
import HomePage from '../homePage/homePage'
import './App.css'
import {  Link, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../context/context';
import { useEffect, useMemo, useState } from 'react';
import University from '../homePage/universityPage';
import NotFound from '../notFound/notFound';
import { Masiv, MasivUniversity } from '../masiv/masiv';
import Weather from '../weather/weather';

function App() {
  
  const [getmasiv, setGetmasiv] = useState([])
  const [getlinkvalue, setGetlinkvalue] = useState({})
  // const [gethomemasiv, setGethomemasiv] = useState([])
  const [getname, setGetname] = useState([])
   const getName = [... new Set(getname?.map((el)=> el.country)) ]

  // console.log(getName)
  const objectGetMasiv = Object.entries(getmasiv)
 
  const filterGetMasiv = objectGetMasiv?.filter((el,index)=> {
    if (  el[0] === "current" || el[0] ===  "current_units"){
      return true
    } else {return false}
  })

  function getvalue(valueFn){
      
    setGetlinkvalue(valueFn)
 }

 console.log(getlinkvalue)

  
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
    //  setGethomemasiv,
     setGetname,
   }}>
     
   <main className="homePageMain">
          <Masiv/>
          <MasivUniversity/>
         
          <header>
           
              <nav>  
                 <Link to={'/'}>Home</Link>
                {/* sssssssssssss */}
                 <select name="" id="">
                      {getName.map((el, index)=> 
 
                         <option key={index} value={el} onClick={()=> getvalue(value)}>
                              {el}
                         </option>
       
                      )}
                   </select>
                   <Link  to={`/${getlinkvalue}`} onClick={()=> getvalue(getlinkvalue)}>   </Link> 
                      {/* sssssssssssss */}
              </nav>

            <Weather/>
          </header>
    
       
      <section className='section'>

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
