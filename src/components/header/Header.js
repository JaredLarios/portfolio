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
                        <h1 className="white">{data["header"]["title"]}</h1>
                        <h1 className="white">{data["header"]["title2"]}</h1>
                        <p className="gray">{data["header"]["subTitle"]}</p>
                        <a className="green" href="#contact">{data["hire"]["title"]}</a>
                    </div>
                    <img src={me} alt='' width={450}></img>
                </div>
            </>);
}

export default Header;