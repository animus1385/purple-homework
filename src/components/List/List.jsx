import Card from '../Card/Card'
import './List.css'

function List({ items, setList, setFilteredList }) {
	return (
		<ul className='list'>
			{items.map((e, index) => {
				return (
					<Card
						className='list__elem'
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
