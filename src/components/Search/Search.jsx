import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './Search.module.css'

function Search({ onSearch, data }) {
	const [searchElem, setSearchElem] = useState('')

	const handlerSearch = e => {
		const value = e.target.value
		setSearchElem(value)
	}
	const handlerSearchBtn = e => {
		e.preventDefault()
		if (searchElem.trim() === '') {
			onSearch(data)
		} else {
			const filtered = data.filter(item =>
				item.title.toLowerCase().includes(searchElem.toLowerCase())
			)
			onSearch(filtered)
		}
	}
	return (
		<form className={styles.search} onSubmit={handlerSearchBtn}>
			<Input
				srcIcon='/src/assets/search.svg'
				placeholder='Введите название'
				onChange={handlerSearch}
				value={searchElem}
			/>
			<Button type='submit'>Искать</Button>
		</form>
	)
}

export default Search
