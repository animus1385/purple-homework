import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Search.css'

function Search() {
	const [searchElem, setSearchElem] = useState('')
	const handlerSearch = e => setSearchElem(e.target.value)
	return (
		<div className='search'>
			<Input
				className='search__input'
				srcIcon='/src/assets/search.svg'
				placeholder='Введите название'
				onChange={handlerSearch}
				value={searchElem}
			/>
			<Button className='search__btn'>Искать</Button>
		</div>
	)
}

export default Search
