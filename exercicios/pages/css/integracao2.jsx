import styles from "./integracao2.module.css"
// Observe que o nome 'styles' foi usado por padrão,
// mas poderia ser qq outro

export default function integracao2 () {
    return (
        <div id={styles.integracao2}>
            <div className={styles.vermelho}>Vermelho</div>
            <div className={styles.azul}>Azul</div>
            <div className={styles.branco}>Branco</div>
        </div>
    )
}