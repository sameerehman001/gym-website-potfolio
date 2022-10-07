import React from 'react'
import './Header.css'
import Baars from '../../assets/bars.png'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth<=786 ? true: false
    const[menuOpened, setOpened] = useState(false)

  return (
    <div className="header">
        <img src={Logo} alt='logo' className='logo' />
{ menuOpened === false && mobile ===true ? (
<div style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
onClick={()=> setOpened(true)}
>
  <img src={Bars} style={{width: '1.5rem', height: '1.5rem'}}/>
</div>
): (
  <ul className='header-menu'>
          <li>
            <Link to='hero' onClick={()=>setOpened(false)} span={true} smooth={true}>
              Home
            </Link>
          </li>         
          <li>
            <Link to='programs' onClick={()=>setOpened(false)} span={true} smooth={true}>
            Programs
            </Link>
          </li>          
          <li>
            <Link to='reasons' onClick={()=>setOpened(false)} span={true} smooth={true}>
            Why Us
            </Link>
          </li>          
          <li>
            <Link to='plans' onClick={()=>setOpened(false)} span={true} smooth={true}>
            Plans
            </Link>
          </li>          
          <li>
            <Link to='testimonials' onClick={()=>setOpened(false)} span={true} smooth={true}>
            Testimonials
            </Link>
          </li>
        </ul>
)}
        
    </div>
  )
}

export default Header