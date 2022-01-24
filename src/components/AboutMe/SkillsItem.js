import React from 'react';

const SkillsItem = ({title, text}) => {
    return (
        <div className='skills__item'>
            <h4 className='skills__item-title'>{title}</h4>
            <p className='skills__item-text'>
                {text}
            </p>
        </div>
    );
};

export default SkillsItem;