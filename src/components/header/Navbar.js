import { IoLanguageSharp } from "react-icons/io5";
import { useLangContext } from "../../context/ContextLang";
import useLang from "../../hooks/langHook";

const Navbar = () => {
    const lang = useLangContext();
    const [data] = useLang(lang.languages);

    const handleLinkClick = (event) => {
        window.location.hash = '/app/#about';
    };

    return ( 
        <nav>
            <div className="logo">
                <a href="/portfolio/"><span>{"C:"}</span>\Jared Larios {">"}</a>
            </div>

            <ul className="menu">
                <li>
                            <a href="/portfolio/">{data["sys"]["home"]}</a>
                </li>
                <li>
                    <a>
                    <span onClick={lang.click} style={{ textTransform: 'capitalize' }}>
                        <IoLanguageSharp />
                        {lang.languages}
                    </span>
                    </a>
                </li>

                {/*
                TODO: FIX BUG TO GET INTO IDS OF HTML OR JSX
                <li>
                    <a onClick={handleLinkClick} >{data["sys"]["about"]}</a>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navbar;