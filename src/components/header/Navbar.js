import { IoLanguageSharp } from "react-icons/io5";
import { useLangContext } from "../../context/ContextLang";

const Navbar = () => {
    const lang = useLangContext();

    return ( 
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <a href="#">Jared Larios</a>
            </div>

            <ul className="flex white">
                <li className="green">
                    <a href="#">{"< Home />"}</a>
                </li>
                <li className="green">
                    <a className="pointer">
                    <span onClick={lang.click} style={{ textTransform: 'capitalize' }}>
                        {"< "} <IoLanguageSharp />
                        {lang.languages} {" />"}
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#about">About Me.</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;