import { useLangContext } from "../../context/ContextLang";
import useLang from "../../hooks/langHook";
import me from '../../assets/images/me.png'
import Navbar from "./Navbar"

const Header = () => {
    const lang = useLangContext();
    const [data] = useLang(lang.languages);    

    return (<header>
                <Navbar />
                <div className="banner">
                    <div className="chart">
                        <h1>{data["title"]}</h1>
                        <span>{"<h1>"}</span>
                        <h2>Hey</h2>
                        <h2>{data["header"]["title"]}</h2>
                        <h2>{data["header"]["title2"]}</h2>
                        <span>{"</h1>"}</span><br/>
                        <span>{"<p>"}</span>
                        <p className="gray">{data["header"]["subTitle"]}</p>
                        <span>{"</p>"}</span>
                        {/* <a className="green" href="#contact">{data["hire"]["title"]}</a> */}
                    </div>
                    <img src={me} alt='' width={450}></img>
                </div>
            </header>);
}

export default Header;