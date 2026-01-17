import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Search.css'

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
			const filtered = data.filter(item => item.title.toLowerCase().includes(searchElem.toLowerCase()))
			onSearch(filtered)
		}
	}
	return (
		<form className='search' onSubmit={handlerSearchBtn}>
			<Input
				className='search__input'
				srcIcon='/src/assets/search.svg'
				placeholder='Введите название'
				onChange={handlerSearch}
				value={searchElem}
			/>
			<Button className='search__btn' type='submit'>
				Искать
			</Button>
		</form>
	)
}

export default Search
