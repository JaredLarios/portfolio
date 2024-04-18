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
                                title="Python"
                                icon={IoLogoPython}
                                description="I create design  products with unique ideas."
                                projects={12/24/2024}
                                />
                            }
                        </div>

                        <div className="flex-full about-text">
                            <h5 className="gray">Introduce</h5>
                            <h1 className="white">Hello, I&#39;m Jared Larios</h1>
                            <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                            <p className="gray">I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Front-End developer with a UI/UX design background. During my 4 years of work as a freelancer, I had the opportunity to enhance my expertise by collaborating with different companies and by creating useful content for both business and customer use.<br/><br/>
                            I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>                        </div>
                    
                    </div>
                </section>
                <section id="contact" className="dark-bg">
                    <div className="flex">
                        <div className="flex-full form">
                            <h1 className="white form-header">Contact Me!</h1>
                        </div>
                        <div className="flex-full form">
                            <Form />
                        </div>
                    </div>
                </section>

            </>
}

export default Body;