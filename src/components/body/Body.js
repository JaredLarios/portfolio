import { useState, useEffect } from 'react'
import Form from './Form';
import { IoLogoPython } from "react-icons/io5";
import { useLangContext } from "../../context/ContextLang";

import useLang from "../../hooks/langHook";
import AboutCard from './AboutCard';

import { DATA_URL } from '../../api/client';

const Body = () => {
    const lang = useLangContext();
    const [myLang] = useLang(lang.languages);

    const [data, setData] = useState(null);

    useEffect(() => {
        try{
            console.log(DATA_URL + 'pro?lang=' + lang.languages)
            fetch(DATA_URL + 'pro?lang=' + lang.languages)
            .then((res) => {
                return res.json()
            })
            .then((myData) => {
                console.log(myData);
                setData(myData);
            });
        } catch {
            console.log('event');
        }
    }, [lang.languages]);

    return  <>
                <section id="about" className="dark-bg">
                    <div className="flex">
                        <div className="flex-full">
                            { data ? data.map((element, index) => (
                                <AboutCard 
                                key={index}
                                title={element.position}
                                icon={element.business}
                                description={element.description}
                                projects={[element?.startDate, element?.endDate]}
                                />
                            )): 
                            <AboutCard
                                key={1}
                                title={myLang["sys"]["loader"]}
                                icon={IoLogoPython}
                                description={myLang["sys"]["loader"]}
                                projects={12/24/2024}
                                />
                            }
                        </div>

                        <div className="flex-full about-text">
                            <h5 className="gray">{myLang["bio"]["type"]}</h5>
                            <h1 className="white">{myLang["bio"]["title"]}</h1>
                            <h3 className="white">{myLang["bio"]["subTitle"]}</h3>
                        <p className="gray">{myLang["bio"]["text"]}<br/><br/>
                            {myLang["bio"]["text2"]}</p>                        
                        </div>
                    
                    </div>
                </section>
                <section id="contact" className="dark-bg">
                    <div className="flex">
                        <div className="flex-full form">
                            <h1 className="white form-header">{myLang["hire"]["title"]}</h1>
                        </div>
                        <div className="flex-full form">
                            <Form />
                        </div>
                    </div>
                </section>

            </>
}

export default Body;