import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { CountdownProvider } from "../../contexts/CountdownContext";
import { useState } from "react";

import { CompletedChallenges } from "../../components/CompletedChallenges";
import { Countdown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import { ChallengeBox } from "../../components/ChallengeBox";

import { ChallengesProvider } from "../../contexts/ChallengesContext";
import { ProfileProvider } from "../../contexts/ProfileContext";

import styles from '../../styles/pages/Home.module.css'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  userName: string;
}

export default function Home(props : HomeProps) {
  const [logged, setLogged] = useState(false); 
  const auxUserName = props.userName;

  if (auxUserName && auxUserName.trim().length > 0){
    !logged && setLogged(true);
  } else {
    logged && setLogged(false);
  }

  return (    
    <>    
      { logged && (          
          <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
          
            <div className={styles.container}>          
              <Head>
                <title>Início | move.self</title>
              </Head>
              
              <ExperienceBar/>

              <CountdownProvider>

                <section>
                
                  <ProfileProvider>
                    <div>
                      <Profile userName={auxUserName}/>
                      <CompletedChallenges />
                      <Countdown />
                    </div>

                    <div>
                      <ChallengeBox />
                    </div>
                  </ProfileProvider>
                
                </section>

              </CountdownProvider>

            </div>

          </ChallengesProvider>    
        ) 
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  
  const levelVerified = level === undefined ? 1 : level;
  const currentExperienceVerified = currentExperience === undefined ? 0 : currentExperience;
  const challengesCompletedVerified = challengesCompleted === undefined ? 0 : challengesCompleted;     
  
  let userName = ctx.query.user;
  const home = ctx.query.home;

  if (!(home === 'home')){
    userName = '';
  }
  
  return {
    props: {
      level: Number(levelVerified),
      currentExperience: Number(currentExperienceVerified),
      challengesCompleted: Number(challengesCompletedVerified),
      userName: String(userName)
    }
  }
}
