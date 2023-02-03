import "./Header-m.css"
import "./Header-d.css"
import "./Header-t.css"

import { useState } from 'react'
import BurguerButton from '../assests/BurguerButton'
export default function Header() {
    const [clicked, setCliked] = useState(false)
    const handleClick = () => {
        setCliked(!clicked)
    }
    return (
        <> 
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick={handleClick} href='#projects'>PROYECTOS</a>
                <a onClick={handleClick} href='#contact'>CONTACTO</a>
            </div>
            <div className='burger'>
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div>
        </>

    )
}