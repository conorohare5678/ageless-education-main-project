import logo from '../Images/AgelessEducation.png'
import { CiHome } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

//navbar defined and exported
export default function Navbar() {

  //return statement to render navbar
  return (
    <>
      {/**all logos, icons and text rendered inside this list */}
      <div className='Navigation-Center'>
        <nav className="Nav">
          <div className='Logo'>
            <img className='logo' src={logo} />
          </div>
          <ul>
            <li>
              {/**import from react icons */}
              <CiHome />
              <a href="/">Home</a>
            </li>

            <li>
              {/**import from react icons */}
              <IoShareSocialOutline />
              <a href="/Social">Social </a>
            </li>
            <li>
              {/**import from react icons */}
              <MdSupportAgent />
              <a href="/Support">Support</a>
            </li>
            <li>
              {/**import from react icons */}
              <HiOutlineComputerDesktop />
              <a href="/Hub">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}