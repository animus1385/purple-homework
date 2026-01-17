import Card from '../Card/Card'
import styles from './List.module.css'

function List({ items, setList, setFilteredList }) {
	return (
		<ul className={styles.list}>
			{items.map((e, index) => {
				return (
					<Card
						title={e.title}
						srcImg={e.srcImg}
						like={e.like}
						favorite={e.favorite}
						setList={setList}
						setFilteredList={setFilteredList}
						key={`card-${index}`}
					/>
				)
			})}
		</ul>
	)
}

export default List
