import styles from './Input.module.css'

function Input({ srcIcon, onChange, value, placeholder = 'введите текст' }) {
	return (
		<div className={styles.customInput}>
			<img className={styles.icon} src={srcIcon} alt='icons' />
			<input
				className={styles.input}
				type='text'
				onChange={onChange}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Input
