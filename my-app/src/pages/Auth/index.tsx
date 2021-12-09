import React, {useState} from "react";

import styles from './index.module.css';
import {Input} from "../../components/ui/Input";
import {Button} from "../../components/ui/Button";
import {Link, useHistory} from "react-router-dom";
import {observer} from "mobx-react";
import logo from '../../Watch_Later_Logo_Full.svg';
import {LayoutContainer} from "../../containers/LayoutContainer";
import {UserResource} from "../../mocks/UserResource";
import {SpinnerIcon} from "../../components/SpinnerIcon";

export const Auth = observer(() => {

    const [loginField, setLoginField] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isError, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hint, setHint] = useState<string>("");

    let history = useHistory();

    const handleAuth = (): void => {
        console.log(loginField)
        let profile = UserResource();
        if (loginField === profile.email && password === profile.password) {
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 500)
            history.push('/collections')
        } else {
            setHint('Неверный логин или пароль')
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 500)
            setError(true)
            console.log('Error!')
        }
    };

    return (
        <LayoutContainer>
            <img src={logo} className={styles.authLogo}/>
            <div className={styles.auth}>
                <div className={styles.authContainer}>
                    <Input<string>
                        type="email"
                        value={loginField}
                        status={isError ? 'error': 'default'}
                        onChange={setLoginField}
                        placeholder='Адрес электронной почты'
                    />
                    <Input<string>
                        type="password"
                        value={password}
                        status={isError ? 'error': 'default'}
                        onChange={setPassword}
                        placeholder='Пароль'
                    />
                    {hint ? <p className={styles.hint}>{hint}</p> : <></>}
                </div>
            </div>
            {isLoading ? <SpinnerIcon/> :
            <Button
                title='Войти'
                onClick={handleAuth}
                disabled={!loginField || !password}
            />}
            <div className={styles.link}>
                Еще не зарегистрированы? <Link to="/sign-up">Регистрация</Link>
            </div>
        </LayoutContainer>
    )
})