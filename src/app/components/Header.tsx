import React from 'react'
import Navbar from "./Navbar"
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        {/* Navbar Component */}
        <div>
            <Navbar/>
        </div>
    </div>
  )
}
export default Header;