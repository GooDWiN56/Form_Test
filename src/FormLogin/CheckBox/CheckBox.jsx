import React from 'react';
import s from './CheckBox.module.css';

const CheckBox = (props) => {
    return (
        <div className={s.check_wrap}>
            <input type="checkbox" value={props.text} id={s.check} />
            <label htmlFor={s.check}>{props.text}</label>
        </div>
    );
}

export default CheckBox;
