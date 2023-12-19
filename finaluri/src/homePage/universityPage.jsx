import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context/context"
import './universityPage.css'

const University = ()=> {
    const params = useParams()
    const {page} = useContext(Context)
 

    function clickUverel(event){
      const value = event.target.value
      window.open(value)
      console.log(value)
    }

    return(
        <>

         <div  className="univerisyDiv">

         <h1> სია  {params.page} - დან</h1>

          {page?.map((el, index)=> {
      
               return <div key={index} className="univerisyDiv2">
                  <button value = {el.web_pages} onClick={clickUverel}> 
                  {el.name}
                  </button>

                  <a href={el.web_pages}> of {params.page} </a>
                  
                </div>  

           
          })}
          
          </div>
        </>
        
    )
}

export default University