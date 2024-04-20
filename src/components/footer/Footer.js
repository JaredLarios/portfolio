import {FaInstagram,
        FaLinkedinIn,
        FaGithub,
        FaFacebookF} from 'react-icons/fa';

import { useLangContext } from '../../context/ContextLang';
import useLang from '../../hooks/langHook'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    const lang = useLangContext();
    const [data] = useLang(lang.languages);

    return  <footer className="light-bg flex justify-space">
                <span className="white">Copyright &copy; {year} Jared Larios - All Rights Reserved</span>
                <ul className="flex">
                    <li><a href={data["hire"]["social"]["facebook"]}><FaFacebookF className="white" width={24} height={24}/></a></li>
                    <li><a href={data["hire"]["social"]["instagram"]}><FaInstagram className="white" width={24} height={24} /></a></li>
                    <li><a href={data["hire"]["social"]["linkedin"]}><FaLinkedinIn className="white" widht={24} height={24} /></a></li>
                    <li><a href={data["hire"]["social"]["github"]}><FaGithub className="white" width={24} height={24} /></a></li>
                </ul>
            </footer>
}


export default Footer;