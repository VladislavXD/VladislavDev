import Logotipe from './../../img/Logo.svg'
import {motion} from 'framer-motion'

import './logo.css'

const Logo = ()=>{
    return (
        <>
            <div className="logo">
                <img src={Logotipe} alt="" className='img'/>
                <h3 className='logo__text'>Vladislav Dev</h3>
            </div>
        
        
        </>
    )
}



export default Logo 