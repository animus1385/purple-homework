import './App.css'
import Header from './components/Header/Header'
import HeaderMain from './components/HeaderMain/HeaderMain'
import Paraph from './components/Paraph/Paraph'
import Search from './components/Search/Search'
import Title from './components/Title/Title'
function App() {
	const items = [
		{
			link: '/search',
			title: 'Поиск фильмов',
		},
		{
			link: '/my-films',
			title: 'Мои фильмы',
			count: 2,
		},
		{
			link: '/login',
			title: 'Войти',
			icon: '/src/assets/Login.svg',
		},
	]
	return (
		<>
			<Header items={items} />
			<main>
				<HeaderMain>
					<Title>Поиск</Title>
					<Paraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paraph>
					<Search />
				</HeaderMain>
			</main>
		</>
	)
}

export default App
