import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import sytles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges () {
    const { challengesCompleted } = useContext(ChallengeContext);
    return (
        <div className={sytles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}