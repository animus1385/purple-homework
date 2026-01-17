import classNames from 'classnames'
import styles from './HeaderMain.module.css'

function HeaderMain({ children }) {
	return (
		<section className={styles.headerMain}>
			<div className={classNames('container', styles.container)}>
				<div className={styles.content}>{children}</div>
			</div>
		</section>
	)
}

export default HeaderMain
