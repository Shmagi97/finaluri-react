import { useContext, useEffect, useState } from 'react'
import '../homePage/homePage.css'
import { Context } from '../context/context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from '../pagination/pagination';


const HomePage = ()=> {
  
   const {homepagemasiv, pagininfo} = useContext(Context)
   
   const ImgStatikUrl = 'https://unicatalog.ge/photos/unilogos/'
   const linkPaigStatikUrl = 'https://unicatalog.ge/unis/'

//sentenceWithSpaces.replace(/\s/g, ''); amogeeba sicariele
//stringWithPunctuation.replace(/,/g,'-'); amogeba mdzime

function getLinkPages(valueFn){
    window.open(valueFn)
   
}


const page1 = homepagemasiv.slice(0, 20)  
const page2 = homepagemasiv.slice(20, 40)  
const page3 = homepagemasiv.slice(40, 61)  

let dinamikMasivPage = []

switch (pagininfo) {
  case 'page1':
    dinamikMasivPage = page1

    break;
  case 'page2': 
  dinamikMasivPage = page2
 
  break;
  case 'page3':
    dinamikMasivPage = page3
 
    break; 
   
  default:
    dinamikMasivPage = page1
    break;
}


  // console.log(pagininfo)


  return(
    <section className='homePageSection'>

    {dinamikMasivPage.map((el, index)=> {

      const imgStatikAdd = ImgStatikUrl.concat(el.logoUrl)
      const linkStatikAdd = linkPaigStatikUrl.concat(el.urlName).replace(/"/g,'-') 
      
      return  <Card key={index} >
               <Card.Img variant="top" src= {imgStatikAdd} />
                  <Card.Body>
                   <Card.Title>{el.name}</Card.Title>
                 <Button variant="primary" value={linkStatikAdd} onClick={(event)=> getLinkPages(event.target.value)}>Go website</Button>
               </Card.Body>
            </Card>
    })}    
   

      <Pagination/>   
    </section>

    
  )


    
  
}


export default HomePage