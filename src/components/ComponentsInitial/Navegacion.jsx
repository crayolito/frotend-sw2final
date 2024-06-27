// import { useState } from 'react'

import { Link } from "react-router-dom"
import {useNavigate} from 'react-router-dom'

const Navegacion = () => {

  // const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()
  return (
    <>
        <div className='px-5 w-full block py-2 xl:flex items-center justify-center'>

            <Link className='text-white uppercase text-2xl md:text-3xl font-bold text-center xl:w-3/5 mb-2'
                to={'https://neon-vacherin-23dcbf.netlify.app'}    
                // onClick={()=>navigate('https://neon-vacherin-23dcbf.netlify.app/home')}
              >
              UrbanEase Solutions 
            </Link>  


            {/* Navegacion Menu
            <nav className='text-white flex justify-center gap-5'>
                <Link to="/">Home</Link>
                <Link to="auth">Login</Link>
                <Link to="/">Signup</Link>
            </nav> */}



        </div>
    </>
  )
}

export default Navegacion
