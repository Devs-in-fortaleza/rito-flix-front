import React from 'react';
import './Menu.style.css'
import { useState } from "react";

interface MenuViewProps {
    title: string;
};

const Menu: React.FC<MenuViewProps> = ({title}: MenuViewProps) => {
    const [menuVisible, setMenuVisible] = useState(false)
    const showMenuInteractive = () => {
        setMenuVisible(!menuVisible)
    }

   return( 
   <>
         <div className='menu-main'>
            <h3>{title}</h3>
            <input placeholder='Busque por algo aqui...'></input>
            <button className='btn-menu' onClick={showMenuInteractive}>-</button>
         </div>
         <div className={`menu-interactive ${menuVisible ? '' : 'hide'}`}>
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
         </div>
    </>
)}

export default Menu