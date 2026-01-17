import './Button.css'

function Button({ children, onClick, type }) {
	return (
		<button className='button accent' onClick={onClick} type={type}>
			{children}
		</button>
	)
}

export default Button
