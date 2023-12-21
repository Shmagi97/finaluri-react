import { useContext, useEffect, useState } from 'react'
import '../homePage/homePage.css'
import { Context } from '../context/context'
import { Link, useFetcher } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const HomePage = ()=> {
  
   const {homepagemasiv} = useContext(Context)

   const ImgStatikUrl = 'https://unicatalog.ge/photos/unilogos/'
   const linkPaigStatikUrl = 'https://unicatalog.ge/unis/'

//sentenceWithSpaces.replace(/\s/g, ''); amogeeba sicariele
//stringWithPunctuation.replace(/,/g,'-'); amogeba mdzime

function getLinkPages(valueFn){
    window.open(valueFn)
   
}

  return(
    <section className='homePageSection'>

    {homepagemasiv.map((el, index)=> {

      const imgStatikAdd = ImgStatikUrl.concat(el.logoUrl)
      const linkStatikAdd = linkPaigStatikUrl.concat(el.urlName).replace(/"/g,'-') 


      // console.log(linkStatikAdd)
      
      return  <Card key={index} >
               <Card.Img variant="top" src= {imgStatikAdd} />
                  <Card.Body>
                   <Card.Title>{el.name}</Card.Title>
                 <Button variant="primary" value={linkStatikAdd} onClick={(event)=> getLinkPages(event.target.value)}>Go website</Button>
               </Card.Body>
            </Card>
    })}    
   

         
    </section>

    
  )


    
  
}


export default HomePage