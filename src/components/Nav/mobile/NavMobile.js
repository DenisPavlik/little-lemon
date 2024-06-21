import { Link } from "react-router-dom";
import './NavMobile.css'

export default function NavMobile({setOpenNav}) {
  return (
    <nav className="nav_mobile">
          <ul>
            <li>
              <Link onClick={()=>setOpenNav(prev => !prev)} aria-label="Home Page" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={()=>setOpenNav(prev => !prev)} to={"/"}>About</Link>
            </li>
            <li>
              <Link onClick={()=>setOpenNav(prev => !prev)} to={"/"}>Menu</Link>
            </li>
            <li>
              <Link onClick={()=>setOpenNav(prev => !prev)} aria-label="Reserve Table" to={"/reservations"}>
                Reservations
              </Link>
            </li>
            <li>
              <Link onClick={()=>setOpenNav(prev => !prev)} to={"/"}>Order Online</Link>
            </li>
            <li>
              <Link onClick={()=>setOpenNav(prev => !prev)} to={"/"}>Login</Link>
            </li>
          </ul>
        </nav>
  )
}