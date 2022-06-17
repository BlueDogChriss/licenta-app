import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import {MdOutlineCancel} from 'react-icons/md';



const Sidebar = () => {

  const activeMenu = true;

  return (
    <div className="ml-3 h-screen
    md:overflow-hidden 
    overflow-auto 
    md:hover:overflow-auto pb-10">
      {activeMenu && (<>
      <div className="flex justify-between items-center">
        <Link to ="/" onClick={() => {}} className="items-center">
          <MdOutlineCancel /><span>test</span> 
        </Link>

      </div>
      </>)}
    </div>
  )
}

export default Sidebar