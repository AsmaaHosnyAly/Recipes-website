import './footer.css'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const url = '#'

  return (
    <footer>
      <div className='up__section'>
        <Link to='/' className='f__logo'>
          <img src={logo} alt='logo' />
        </Link>
        <ul>
          <h1>Company</h1>
          <li>
            <a href={url}>Teams</a>
          </li>
          <li>
            <a href={url}>Services</a>
          </li>
          <li>
            <a href={url}>Subscribe</a>
          </li>
          <li>
            <a href={url}>Advertisment</a>
          </li>
        </ul>

        <ul>
          <h1>About</h1>
          <li>
            <a href={url}>Community</a>
          </li>
          <li>
            <a href={url}>Location</a>
          </li>
          <li>
            <a href={url}>Mobile App</a>
          </li>
          <li>
            <a href={url}>Services</a>
          </li>
        </ul>
      </div>

      <div className='down__section'>
        <ul>
          <h1>Contact</h1>
          <li>
            <p>+92475357355</p>
          </li>
          <li>
            <p>house #215,street #5</p>
          </li>
          <li>
            <p>town</p>
          </li>
          <li>
            <p>map</p>
          </li>
        </ul>

        <div className='social'>
          <h1>Follow Us</h1>
          <div className='social__icons'>
            <a href={url}>
              <i className='bx bxl-facebook'></i>
            </a>
            <a href={url}>
              <i className='bx bxl-twitter'></i>
            </a>
            <a href={url}>
              <i className='bx bxl-instagram'></i>
            </a>
            <a href={url}>
              <i className='bx bxl-youtube'></i>
            </a>
          </div>
        </div>

        <div className='footer__search'>
          <h1>Email</h1>
          <input type='email' placeholder='Enter Email' />
        </div>
      </div>

      <p className='copyright'>All rights Reserved &copy; 2021</p>
    </footer>
  )
}

export default Footer
