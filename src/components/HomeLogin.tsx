
import styles from '../styles/components/HomeLogin.module.css';

interface HomeLoginProps {
    handle: () => void;
}

export function HomeLogin (props: HomeLoginProps) {

    return (
        <div className={styles.container}>
            <input type="text"/>Informe seu nome de usuário no github
            <button onClick={props.handle}>Entrar</button>
        </div>
    );

}