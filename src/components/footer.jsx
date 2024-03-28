  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
  import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
  import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'


const Footer = (props) => {
    return (
        <div className="footer-band">
          <div className="footer1">
            <a href="https://www.linkedin.com/in/jared-mcreynolds-27b54138/"><FontAwesomeIcon icon={faLinkedin} className='icon' size='2x'/></a>
            <a href="https://www.instagram.com/muerte_for_death/"><FontAwesomeIcon icon={faInstagramSquare} className='icon' size='2x'/></a>
            <a href="https://github.com/jarmac76"><FontAwesomeIcon icon={faGithubSquare} className='icon' size='2x'/></a>
          </div>
          <div className='footer2'>
            <p>@{new Date().getFullYear()} | Designed and coded by Jared McReynolds</p> 
          </div>
        </div>      
    );
}

export default Footer;