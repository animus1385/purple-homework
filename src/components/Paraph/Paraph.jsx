import styles from './Paraph.module.css'

function Paraph({ children }) {
	return <p className={styles.paraph}>{children}</p>
}

export default Paraph
