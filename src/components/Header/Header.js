import './Header.css'
import logo from '../../assets/images/Logo.svg'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  )
}