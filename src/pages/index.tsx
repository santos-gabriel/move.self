import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { GetServerSideProps } from 'next';

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownContext, CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { useState } from 'react';
import { HomeLogin } from '../components/HomeLogin';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  const [logged, setLogged] = useState(false);
 
  function handleLogged () {
    setLogged(!logged);
  }

  return (
    <>
    {logged ? (
      <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
        <div className={styles.container}>

          <Head>
            <title>Início | move.self</title>
          </Head>

          
          <ExperienceBar/>

          <CountdownProvider>
            <section>

              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>

              <div>
                <ChallengeBox />
              </div>

            </section>
          </CountdownProvider>

        </div>
      </ChallengesProvider>
    ) : ( 
      <HomeLogin handle={handleLogged}/>
    )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  
  const levelVerified = level === undefined ? 1 : level;
  const currentExperienceVerified = currentExperience === undefined ? 0 : currentExperience;
  const challengesCompletedVerified = challengesCompleted === undefined ? 0 : challengesCompleted;   
  

  return {
    props: {
      level: Number(levelVerified),
      currentExperience: Number(currentExperienceVerified),
      challengesCompleted: Number(challengesCompletedVerified)
    }
  }
}
