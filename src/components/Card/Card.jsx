
import classNames from 'classnames'
import styles from './Card.module.css'

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
		<li className={styles.card}>
			<button
				className={classNames({[styles['card__like']]:true, 'button-reset':true})}
				onClick={handlerLike}
				aria-label='поставить лайк'
				title='поставить лайк'>
				<img src='/src/assets/star.svg' alt='star' />
				<span>{like}</span>
			</button>
			<img className={styles['card__img']} src={srcImg} alt={title} />
			<div className={styles['card__info']}>
				<h3 className={styles['card__title']} title={title}>
					{title}
				</h3>
				<button
					onClick={changeFavorite}
					className={classNames({
						[styles['card__btn']]:true, 
						'button-reset':true,
						'card__btn--bookmark': favorite
					})}
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
