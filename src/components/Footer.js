import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {setLanguage,setDarkMode} from "../stores/site";

function Footer(props) {

    const dispatch =useDispatch()
    const {language,dark} = useSelector(state=>state.site)
    const languages = ['tr','en']

    const handleLanguage= (lang) =>{
        dispatch(setLanguage(lang))
    }

    return (
        <div>
            footer
            <div>
                {languages.map((lang,index)=>(
                    <button onClick={()=> handleLanguage(lang)} className={lang === language ? 'active' : ''} key={index}>{lang}</button>
                    )
                )}
            </div>
            <div>
                <button onClick={()=>dispatch(setDarkMode())}>
                    {dark ? 'Light Moda Geç' : 'Dark Moda Geç'}
                </button>
            </div>
        </div>
    );
}

export default Footer;
