import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import { LangProvider } from "../context/ContextLang";

const Home = () => {
    return  <LangProvider>
                <Header />
                <Body />
                <Footer />
            </LangProvider>
}

export default Home;