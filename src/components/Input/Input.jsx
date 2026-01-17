import './Input.css'

function Input({srcIcon, onChange, value, placeholder = 'введите текст'}) {
	return (
		<div className='custom-input'>
      <img className='custom-input__icon' src={srcIcon} alt='icons'/>
			<input className='custom-input__input' type='text' onChange={onChange} value={value} placeholder={placeholder} />
		</div>
	)
}

export default Input
