import Link from 'next/link'

const HomePage = () => {
	return (
		<div>
			<ul>
				<li>
					<Link href='/portfolio'>Portifolio</Link>
				</li>{' '}
				<li>
					<Link href='/clients'>Clientes</Link>
				</li>
			</ul>
		</div>
	)
}

export default HomePage
