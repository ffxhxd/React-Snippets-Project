import React, { useState } from 'react'
import './Sidemenu.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
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

    {/* menu items */}
    <div className="main-menu">
      <ul>
        <li>
          <a className='menu-item'>
            <div className='menu-icon'>
            <MdOutlineDashboard  size={22}/>
            </div>
           <span>Dashboard</span>
            </a>
        </li>
        <li>
          <a className='menu-item'>
            <div className='menu-icon'>
            <MdOutlineDashboard  size={22}/>
            </div>
           <span>Content</span>
            </a>
            <ul className='sub-menu'>
                <li>
                  <a>
                    Courses
                  </a>
                </li>
                <li>
                  <a>
                    Video
                  </a>
                </li>
            </ul>
        </li>
        <li>
          <a className='menu-item'>
            <div className='menu-icon'>
            <MdOutlineDashboard  size={22}/>
            </div>
          <span>Design</span>
            </a>
        </li>
      </ul>
    </div>
    
    {/* footer sidemnu */}

    <div className="side-menu-footer">
        <div></div>
    </div>
    
    </div>
    </>
  )
}

export default Sidemenu