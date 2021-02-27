import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import sytles from '../styles/components/Profile.module.css'

export function Profile () {
    const { level } = useContext(ChallengeContext);
    return (
        <div className={sytles.profileContainer}>
            <img src="https://github.com/santos-gabriel.png" alt="Gabriel Almeida"/>
            <div>
                <strong>Gabriel Almeida</strong>                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}