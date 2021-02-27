import { count } from 'console';
import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';




export function Countdown () {

    const { minutes, seconds, hasFinished, hasPaused, isActive, startCountDown, stopCountDown } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    
    
    return (
        <div>
            
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled className={styles.countdownButton}>Ciclo encerrado</button>
            ) : (
                <>
                    <div className={isActive ? styles.countdownContainerButtonActive : null}>
                        <button type="button" className={isActive ? `${styles.countdownButton} ${styles.countdownButtonActive}` : styles.countdownButton} onClick={startCountDown}>
                            {isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}  
                        </button>

                        {
                            isActive ? <button type="button" className={hasPaused ? `${styles.stopCountDownButton} ${styles.stopCountDownButtonPaused}` : styles.stopCountDownButton} onClick={stopCountDown}>{hasPaused ? 'Continuar' : 'Pausar'}</button> : ''
                        }
                    </div>

                </>
            ) }
            
        </div>
    );
}
