import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from '../styles/components/HomeLogin.module.css';


export function HomeLogin () {    
    const router = useRouter();
    const [userName, setUserName] = useState('');

    function handleUser() {        
        router.push(`/home?user=${userName}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerLogin}>
                <div >
                    <img src="/logo-full.svg" alt="Logo Move.self"/>
                </div>

                <div >
                    <input id='userName' type="text" placeholder="Informe seu nome no github" onChange={(e) => setUserName(e.target.value)}/>
                    <button type="button" onClick={handleUser}>
                        
                        <p>Entrar</p>
                        <img src="/icons/GitHub-Mark-32px.png" alt="GitHub"/>
                        
                    </button>
                </div>
            </div>
        </div>
    );

}