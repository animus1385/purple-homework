import Paraph from '../Paraph/Paraph'
import Title from '../Title/Title'
import './Empty.css'

function Empty() {
	return (
		<div className='empty'>
			<Title>Упс... Ничего не найдено</Title>
			<Paraph>Попробуйте изменить запрос или ввести более точное название фильма</Paraph>
		</div>
	)
}

export default Empty
