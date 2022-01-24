import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Social = ({path, icon}) => {
    return (
        <li className="footer__list-item">
            <a target='_blank' href={path} className="footer__link">
                <FontAwesomeIcon icon={icon}/>
            </a>
        </li>
    );
};

export default Social;