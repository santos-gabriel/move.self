import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengesContext";


interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    hasPaused: boolean;
    isActive: boolean;
    startCountDown: () => void;
    stopCountDown: () => void;
    resetCountDown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps){
    const { startNewChallenge } = useContext(ChallengeContext);
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasPaused, setHasPaused] = useState(false)
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    function startCountDown () {
        setIsActive(!isActive);
    }

    function stopCountDown () {
        setHasPaused(!hasPaused);
        clearTimeout(countdownTimeout);        
    }

    function resetCountDown () {
        setIsActive(false);
        setHasPaused(false);
        setTime(25 * 60);
        setHasFinished(false)
        clearTimeout(countdownTimeout);        
    }

    useEffect(() => {
        if (isActive && time > 0 && !hasPaused) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0){
            startNewChallenge();
            setHasFinished(true);
            // resetCountDown();
        } else if (!isActive) {
            resetCountDown();
        }
    }, [isActive, time, hasPaused]);

    useEffect(() => {
        if (!hasPaused && time > 0 && !isActive){
            resetCountDown();
        }
    }, [hasPaused]);

    return (
        <CountdownContext.Provider value={{isActive, hasPaused, hasFinished, minutes, seconds, startCountDown, stopCountDown, resetCountDown}}>
            {children}
        </CountdownContext.Provider>
    );
}
