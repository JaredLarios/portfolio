import {FaInstagram,
        FaLinkedinIn,
        FaGithub,
        FaFacebookF} from 'react-icons/fa';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return  <footer className="light-bg flex justify-space">
                <span className="white">Copyright &copy; {year} Jared Larios - All Rights Reserved</span>
                <ul className="flex">
                    <li><FaFacebookF className="white" width={24} height={24}/></li>
                    <li><FaInstagram className="white" width={24} height={24} /></li>
                    <li><FaLinkedinIn className="white" widht={24} height={24} /></li>
                    <li><FaGithub className="white" width={24} height={24} /></li>
                </ul>
            </footer>
}


export default Footer;