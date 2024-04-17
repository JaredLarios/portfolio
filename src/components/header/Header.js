import { useLangContext } from "../../context/ContextLang";
import useLang from "../../hooks/langHook";
import me from '../../assets/images/me.png'
import Navbar from "./Navbar"

const Header = () => {
    const lang = useLangContext();
    const [data] = useLang(lang.languages);    

    return (<>
                <Navbar />
                <div className="header flex light-bg">
                    <div>
                        <button>{data["title"]}</button>
                        <h1 className="white">Talk is cheap.</h1>
                        <h1 className="white">Show me the code!</h1>
                        <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                        <a className="green" href="#contact">Let&#39;s chat!</a>
                    </div>
                    <img src={me} alt='' width={450}></img>
                </div>
            </>);
}

export default Header;