import React, {useContext} from 'react';
import './Switcher.css'
import {ThemeContext} from "../../providers/ThemeProvider";

const Switcher = () => {
    const {setType, type} = useContext(ThemeContext);
    return (
        <span className="switcher switcher-1">
            <input defaultChecked={type} onChange={() => setType(!type)} className='switcher__input' type="checkbox" id="switcher-1"/>
                 <label className='switcher__label' htmlFor="switcher-1"></label>
            </span>
);
};

export default Switcher;