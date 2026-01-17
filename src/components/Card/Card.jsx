import './Card.css'

function Card({ handlerLike, like, title, srcImg, favorite, setList, setFilteredList }) {
	const changeFavorite = () => {
		const updateList = prev =>
			prev.map(e => {
				if (e.title === title) {
					return { ...e, favorite: !favorite }
				}
				return e
			})

		setList(updateList)
		setFilteredList(updateList)
	}

	return (
		<li className='card'>
			<button
				className='card__like button-reset'
				onClick={handlerLike}
				aria-label='поставить лайк'
				title='поставить лайк'>
				<img src='/src/assets/star.svg' alt='star' />
				<span>{like}</span>
			</button>
			<img className='card__img' src={srcImg} alt={title} />
			<div className='card__info'>
				<h3 className='card__title' title={title}>
					{title}
				</h3>
				<button
					onClick={changeFavorite}
					className={`card__btn button-reset ${favorite ? 'card__btn--bookmark' : ''}`}
					aria-label={favorite ? 'В избраном ' : 'В избранное'}
					title={favorite ? 'В избраном ' : 'В избранное'}>
					<img
						src={favorite ? '/src/assets/Bookmark.svg' : '/src/assets/like.svg'}
						alt={favorite ? 'Bookmark' : 'like'}
					/>
					<span>{favorite ? 'В избраном ' : 'В избранное'} </span>
				</button>
			</div>
		</li>
	)
}

export default Card
