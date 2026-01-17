import classNames from 'classnames'
import styles from './Button.module.css'

function Button({ children, onClick, type }) {
	return (
		<button className={classNames(styles.button, styles.accent)} onClick={onClick} type={type}>
			{children}
		</button>
	)
}

export default Button
