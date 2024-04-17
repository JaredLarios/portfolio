import { createContext, useState, useContext } from "react";

export const langContext = createContext();
export const langToggleContext = createContext();

export const useLangContext = () => {
    return useContext(langContext)
}

export const useLangToggleContext = () => {
    return useContext(langToggleContext)
}

export const LangProvider = (props) => {
    const [lang, setLang] = useState("eng")

    const handleClick = () => {
        const res = lang === "eng"?"spa": "eng";
        setLang(res)
    }

    const contextValue = {
        languages: lang,
        click: handleClick
    }

    return(
        <langContext.Provider value={contextValue}>
                {props.children}
        </langContext.Provider>
    );
}