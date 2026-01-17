
import classNames from 'classnames'
import styles from './Header.module.css'
function Header({ items }) {
	return (
		<header className={styles.header}>
			<div className={classNames({
				'container':true,
				[styles['header__container']]:true
			})}>
				<img className={styles['header__logo']} src='/src/assets/logo.svg' alt='logo' />
				<nav className='header__nav'>
					<ul className='header__list'>
						{items.map((e, index) => {
							return (
								<li className='header__elem' key={`nav-${index}`}>
									<a className='header__link' href={e.link}>
										{e.title}
									</a>
									{e.count ? <div className='header__elem-count'>{e.count}</div> : false}
									{e.icon ? <img className='header__elem-img' src={e.icon} alt='icon' /> : false}
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
