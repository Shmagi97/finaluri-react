import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context/context"


const University = ()=> {
    const params = useParams()
    const {getlinkvalue} = useContext(Context)
    console.log(getlinkvalue)

    return(
        <>
          
          <p>es aris </p>
          <p>university of {params.page} </p>
          
        </>
        
    )
}

export default University