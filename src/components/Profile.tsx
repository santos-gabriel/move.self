import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { ProfileContext } from '../contexts/ProfileContext';
import sytles from '../styles/components/Profile.module.css'

export function Profile () {
    const { level } = useContext(ChallengeContext);
    const { userName, userImg } = useContext(ProfileContext);

    return (
        <div className={sytles.profileContainer}>
            <img src={userImg} alt={userName}/>
            <div>
                <strong>{userName}</strong>                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}