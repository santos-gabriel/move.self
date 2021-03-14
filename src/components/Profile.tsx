import { useContext, useEffect } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { ProfileContext } from '../contexts/ProfileContext';
import sytles from '../styles/components/Profile.module.css'

interface ProfileProps {
    userName: string
}

export function Profile (props: ProfileProps) {
    const { level } = useContext(ChallengeContext);
    const { userName, userImg, handleUserImg, handleUserName } = useContext(ProfileContext);

    useEffect(() => {
        handleUserImg(`https://github.com/${props.userName}.png`);
        handleUserName(props.userName);
    }, []);
    

    return (
        <div className={sytles.profileContainer}>
            <img src={userImg} alt={userName}/>
            <div>
                <strong>{userName}</strong>                
                <p>
                    <img src="/icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}