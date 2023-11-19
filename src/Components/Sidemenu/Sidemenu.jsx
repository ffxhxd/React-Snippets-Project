import React, { useState } from 'react'
import './Sidemenu.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Sidemenu = () => {
    //state for toggle button
    const [inactive, setInactive] = useState(false);

  return (
    <>
    <div className= {`side-menu ${inactive ? 'inactive' : ''}`}> 

    {/* top section */}
    <div className='top-section'>
        {/* logo */}
        <div className='logo'>R</div>
        <div onClick = {()=>setInactive(!inactive)} className='toggle-menu-btn'>
            {inactive ? <IoIosArrowRoundForward/> : <IoMdArrowRoundBack/> }
        </div>
    </div>
    
    {/* search menu */}
    <div className="search-controller">
        <button className='search-btn'>
        <FaSearch />
        </button>
        <input type='text' placeholder='search'/>
    </div>

    {/* divider line */}
    <div className="divider"></div>
    
    
    </div>
    </>
  )
}

export default Sidemenu