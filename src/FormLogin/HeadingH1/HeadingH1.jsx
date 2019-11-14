import React from 'react';
import s from './HeadingH1.module.css';

const HeadingH1 = (props) => {
    return (
        <h1 className={s.head}>{props.text}</h1>
    );
}

export default HeadingH1;
