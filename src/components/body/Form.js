import { useState, useEffect } from 'react';
import { URL } from '../../api/client'
import { useLangContext } from "../../context/ContextLang";
import useLang from "../../hooks/langHook";

// TODO: use request defualt library to consume API

const Form = () => {
    const lang = useLangContext();
    const [data] = useLang(lang.languages);

    const [inputValue, setInputValue] = useState({
        'email': null,
        'subject': null,
        'message': null
    });

    const [errorMessage, setErrorMessage] = useState({
        'email': '',
        'message': ''
    });

    const [dResponse, setResponse] = useState(null);

    useEffect(() => {
        // Log the value of dResponse whenever it changes
        console.log('response: '+dResponse);
    }, [dResponse]);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setInputValue(  prevInput => ({
            ...prevInput,
            [id]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(null)
        if(!isValidEmail(inputValue.email) || inputValue.message === null){
            if(!isValidEmail(inputValue.email)){
                setErrorMessage(prevError => {
                    return{...prevError, email: "Email Is not valid"}
                })
            }
            if(inputValue.message === null){
                setErrorMessage(prevError => {
                    return{...prevError, message: "You should type a message"}
                })
            }
        }
        else{
            sendMessage(inputValue);
            setInputValue({
                'email': null,
                'subject': null,
                'message': null
            })
        }
    }

    const isValidEmail = (value) =>{
        const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(value);
    }

    const sendMessage = async (data) =>{
        try{
            const response = await fetch(
                `${URL}message/send`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: data.email,
                        subject: data.subject,
                        message: data.message,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
            })

            setResponse(response.status);
            const resData = await response.json();
            console.log(resData)
        }
        catch(err) {
            console.log(err.message);
        };
    }

    const handleClear = (e) => setResponse(null)

    const responseMessage = () => {

        if( dResponse >= 200 & dResponse < 300 ){
            return  <div className="notify-box notify-border form b-green bg-green">
                                <div className=""> </div>
                                <div className="white">
                                    <p id='notMsg' className="">Message was sent!</p>
                                </div>
                                <span className="pointer padding-right white" onClick={handleClear}>x</span>
                                </div>
        } else if ( dResponse >= 400 & dResponse < 500 ){
            return <div className='notify-box notify-border form b-red bg-red'>
                                <div className=""> </div>
                                <div className="white">
                                    <p id='notMsg'> Error {dResponse} try again.</p>
                                </div>
                                <span className="pointer padding-right white" onClick={handleClear}>x</span></div>
        } else if ( dResponse >= 500 & dResponse < 600 ){
            return <div className='notify-box notify-border form b-red bg-red'>
                                <div className=""> </div>
                                <div className="white">
                                    <p id='notMsg'> Error {dResponse} Couldn't reach server.</p>
                                </div>
                                <span className="pointer padding-right white" onClick={handleClear}>x</span></div>
        }
        else{
            return <></>
        }
    }

    return  <form
            onSubmit={handleSubmit}
            className="form">
                { responseMessage() }
                <p className='error'>
                    { errorMessage?.email || '' ? `${errorMessage.email}` : `` }
                </p>

                <label className="green">
                    <input
                    id="email"
                    type="email"
                    className="display-block width-100 margin-input"
                    placeholder={data['hire']['contact']}
                    value={inputValue.email === null ? '' : inputValue.email}
                    onChange={handleChange}
                    required/>
                </label>

                <label className="green">
                    <input
                    id="subject"
                    className="display-block width-100 margin-input"
                    placeholder={data['hire']['subj']}
                    value={inputValue.subject === null ? '' : inputValue.subject}
                    onChange={handleChange}/>
                </label>

                <p className="error">
                    { errorMessage?.message || '' ? `${errorMessage.message}` : `` }
                </p>
                <label className="green">
                    <textarea
                    id="message"
                    maxLength={300}
                    rows={7}
                    className="display-block width-100 margin-input text-area"
                    placeholder={data['hire']['holder']}
                    value={inputValue.message === null ? '' : inputValue.message}
                    onChange={handleChange}
                    required />
                </label>

                <input
                id="submit-btn"
                type="submit"
                className="button width-100 white"
                value = {data['hire']['button']}/>
            </form>
}

export default Form;