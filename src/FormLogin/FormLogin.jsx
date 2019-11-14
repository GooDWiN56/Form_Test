import React from 'react';
import s from './FormLogin.module.css';
import HeadingH1 from './HeadingH1/HeadingH1';
import InputText from './InputText/InputText';
import CheckBox from './CheckBox/CheckBox';
import Button from './Button/Button';

function FormLogin() {
    return (
        <div className={s.from_wrap}>
            <form>
                <HeadingH1 text="Login" />
                <InputText type="text" text="E-mail" />
                <InputText type="password" text="Password" />
                <CheckBox text="Remember" />
                <Button text="LogIn" />
            </form>
        </div>
    );
}

export default FormLogin;
