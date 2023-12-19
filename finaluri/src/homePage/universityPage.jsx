import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context/context"
import './universityPage.css'

const University = ()=> {
    const params = useParams()
    const {page} = useContext(Context)
    // console.log(page,'university')

    function clickUverel(event){
      const value = event.target.textContent
      console.log(value)
    }

    return(
        <>

         <div  className="univerisyDiv">

         <h1> სია  {params.page} - დან</h1>

          {page?.map((el, index)=> {
      
               return <ul key={index} className="univerisyDiv2">
                  <li textcontent = {el} onClick={clickUverel}> 
                  {el.name}
                  </li>

                  <a href={el.web_pages}> of {params.page} </a>
                  
                </ul>  

           
          })}
          
          </div>
        </>
        
    )
}

export default University