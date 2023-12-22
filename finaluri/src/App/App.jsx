
import HomePage from '../homePage/homePage'
import './App.css'
import {  Link, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../context/context';
import { useEffect, useMemo, useState } from 'react';
import University from '../homePage/universityPage';
import NotFound from '../notFound/notFound';
import Header from '../header/header';


function App() {
  
  const [getmasiv, setGetmasiv] = useState([])
  const [getlink, setGetlink] = useState([])
  const [getname, setGetname] = useState([])
   const [page, setPage] = useState([])
   const [getnumbervalue, setGetnumbervalue] = useState(50)
   const [homepagemasiv, setHomepagemasiv] = useState([])
   const [pagininfo, setPegininfo] = useState()


  const objectGetMasiv = Object.entries(getmasiv)
   

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
     objectGetMasiv,
     setGetname,
     setPage,
     page,
     getlink,
     getname,
     setGetlink,
     setGetnumbervalue,
     getnumbervalue,
     setHomepagemasiv,
     homepagemasiv,
     setPegininfo,
     pagininfo,
    
   }}>
     
   <main className="appPageMain">
         
   
      <Header/>
       
      <section className='appPageMainSection'>

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
