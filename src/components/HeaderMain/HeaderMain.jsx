import './HeaderMain.css'

function HeaderMain({ children }) {
	return (
		<section className='header-main'>
			<div className='container header-main__container'>
				<div className='header-main__content'>{children}</div>
			</div>
		</section>
	)
}

export default HeaderMain
