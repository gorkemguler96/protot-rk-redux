import React from 'react';
import {useSelector} from "react-redux";

function Header(props) {

    const {language,dark} = useSelector(state=>state.site)

    return (
        <div>
            header
            <div>
                Dark Mod={dark ? 'evet' : 'hayir'} <br/>
                Mevcut Dil={language}
            </div>
        </div>
    );
}

export default Header;
