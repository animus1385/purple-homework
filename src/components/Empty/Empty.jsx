import Paraph from '../Paraph/Paraph'
import Title from '../Title/Title'
import styles from './Empty.module.css'

function Empty() {
	return (
		<div className={styles.empty}>
			<Title>Упс... Ничего не найдено</Title>
			<Paraph>Попробуйте изменить запрос или ввести более точное название фильма</Paraph>
		</div>
	)
}

export default Empty
