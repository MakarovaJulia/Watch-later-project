import React, {useEffect, useState} from "react";

import styles from './index.module.css';
import {Link, useHistory} from 'react-router-dom';
import {Input} from "../../components/ui/Input";
import {Button} from "../../components/ui/Button";
import {BaseLayout} from "../../containers/BaseLayout";
import logo from '../../Watch_Later_Logo_Full.svg';
import {SpinnerIcon} from "../../components/SpinnerIcon";
import { LayoutContainer } from "../../containers/LayoutContainer";

export const SignUp = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confpassword, setConfPassword] = useState<string>('');
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);
    const [hint, setHint] = useState<string>("");

    let history = useHistory();

    const handleAuth = (): void => {
        console.log(login)
        if (login && password && confpassword === password) {
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 1000)
            history.push('/collections')
        } else {
            setHint('Пароли не совпадают')
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 1000)
            setError(true)
            console.log('Error!')
        }
    };

    useEffect(() => {
        if (login.trim() && password.trim()) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    }, [login, password]);

    return (
        <LayoutContainer>
            <img src={logo} className={styles.authLogo}/>
            <div className={styles.signUp}>
                <div className={styles.signUpContainer}>
                    <Input<string>
                        type="email"
                        value={login}
                        status="default"
                        onChange={setLogin}
                        placeholder='Адрес электронной почты'
                    />
                    <Input<string>
                        type="password"
                        value={password}
                        onChange={setPassword}
                        status={isError ? 'error': 'default'}
                        placeholder='Пароль'
                    />
                    <Input<string>
                        type="password"
                        value={confpassword}
                        onChange={setConfPassword}
                        status={isError ? 'error': 'default'}
                        placeholder='Подтвердите пароль'
                    />
                    {hint ? <p className={styles.hint}>{hint}</p> : <></>}
                </div>
            </div>
            {isLoading ? <SpinnerIcon/> :
                <Button
                    title='Войти'
                    onClick={handleAuth}
                    disabled={!login || !password || !confpassword}
                />}
            <div className={styles.link}>
                Есть логин для входа? <Link to="/">Войти</Link>
            </div>
        </LayoutContainer>
    )
}