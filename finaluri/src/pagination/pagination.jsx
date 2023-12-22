import { useContext } from 'react'
import '../pagination/pagination.css'
import { Context } from '../context/context'


const Pagination = () => {
    const {setPegininfo, pagininfo} = useContext(Context)
  


    return (
        <div className='paginationDiv'>

            <li value={pagininfo}  onClick={()=> setPegininfo('page1')} > 1 </li>
            <li  value={pagininfo}  onClick={()=> setPegininfo('page2')}>2</li>
            <li  value={pagininfo}  onClick={()=> setPegininfo('page3')}>3</li>
            
        </div>
    )
}

export default Pagination