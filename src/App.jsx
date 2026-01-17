import { useState } from 'react'
import './App.css'
import Empty from './components/Empty/Empty'
import Header from './components/Header/Header'
import HeaderMain from './components/HeaderMain/HeaderMain'
import List from './components/List/List'
import Paraph from './components/Paraph/Paraph'
import Search from './components/Search/Search'
import Title from './components/Title/Title'
function App() {
	const menu = [
		{
			link: '/search',
			title: 'Поиск фильмов'
		},
		{
			link: '/my-films',
			title: 'Мои фильмы',
			count: 2
		},
		{
			link: '/login',
			title: 'Войти',
			icon: '/src/assets/Login.svg'
		}
	]

	const LIST = [
		{
			srcImg: '/img/img-1.png',
			title: 'The Big Bang Theory',
			like: 12,
			favorite: false
		},
		{
			srcImg: '/img/img-2.png',
			title: 'Friends',
			like: 123,
			favorite: false
		},
		{
			srcImg: '/img/img-3.png',
			title: 'Money Heist',
			like: 8125,
			favorite: true
		},
		{
			srcImg: '/img/img-4.png',
			title: 'How I Met Your Mother',
			like: 123,
			favorite: false
		},
		{
			srcImg: '/img/img-5.png',
			title: 'Loki',
			like: 235,
			favorite: false
		},
		{
			srcImg: '/img/img-6.png',
			title: 'Shang Chi',
			like: 124,
			favorite: false
		},
		{
			srcImg: '/img/img-7.png',
			title: 'Black Widow',
			like: 324,
			favorite: false
		},
		{
			srcImg: '/img/img-8.png',
			title: 'Two And a Half Men',
			like: 456,
			favorite: false
		}
	]
	const [data, setData] = useState(LIST) 
	const [filteredList, setFilteredList] = useState(LIST) 

	return (
		<>
			<img className='background-app' src='/src/assets/Background.svg' alt='bg' />
			<Header items={menu} />
			<main>
				<HeaderMain>
					<Title>Поиск</Title>
					<Paraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paraph>
					<Search onSearch={setFilteredList} data={data} />
				</HeaderMain>
				<section className='content-list'>
					<div className='content-list__container container'>
						{filteredList.length > 0 && (
							<List items={filteredList} setList={setData} setFilteredList={setFilteredList} />
						)}
						{filteredList.length === 0 && <Empty />}
					</div>
				</section>
			</main>
		</>
	)
}

export default App
