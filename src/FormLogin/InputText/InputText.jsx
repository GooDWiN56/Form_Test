import React from 'react';
import s from './InputText.module.css';

const InputText = (props) => {
    return (
        <div className={s.input_wrap}>
            <input type={props.type} placeholder={props.text}  />
        </div>
    );
}

export default InputText;
