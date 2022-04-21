import styles from "../css/integracao2.module.css"
import SomaUm from "../../components/SomaUm";

export default function propsSomenteLeitura () {
    return (
        <div id={styles.integracao2}>
            <div className = {styles.vermelho}>
                <SomaUm numero = {99}/>
            </div>
        </div>
    )
}