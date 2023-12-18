import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context/context"


const University = ()=> {
    const params = useParams()
    const {gethomemasiv} = useContext(Context)
    console.log(gethomemasiv)

    return(
        <>
          
         
          <p>university of {params.page} </p>
          
        </>
        
    )
}

export default University