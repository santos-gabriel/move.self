
import { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import styles from '../styles/components/HomeLogin.module.css';


interface HomeLoginProps{
    handleLogged: () => void;
}

export function HomeLogin (props: HomeLoginProps) {
    const { handleUserName, handleUserImg } = useContext(ProfileContext);
    
    function handleUser(userName: string) {
        handleUserName(userName);
        handleUserImg(`https://github.com/${userName}`);
        props.handleLogged()
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerLogin}>
                <div >
                    <img src="/logo-full.svg" alt="Logo Move.self"/>
                </div>

                <div >
                    <input id='userName' type="text" placeholder="Informe seu nome no github"/>
                    <button type="button" onClick={handleUser('santos-gabriel')}>
                        
                        <p>Entrar</p>
                        <img src="/icons/GitHub-Mark-32px.png" alt="GitHub"/>
                        
                    </button>
                </div>
            </div>
        </div>
    );

}