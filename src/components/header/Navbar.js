import { IoLanguageSharp } from "react-icons/io5";
import { useLangContext } from "../../context/ContextLang";
import useLang from "../../hooks/langHook";

const Navbar = () => {
    const lang = useLangContext();
    const [data] = useLang(lang.languages)

    return ( 
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <a href="/">Jared Larios</a>
            </div>

            <ul className="flex white">
                <li className="green">
                            <a href="/">{"< " + data["sys"]["home"] + " />"}</a>
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
                    <a href="/#about">{data["sys"]["about"]}</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;