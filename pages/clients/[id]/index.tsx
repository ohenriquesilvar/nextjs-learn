import { useRouter } from 'next/router'

const ClientProjectPage = () => {
	const router = useRouter()
	const { id } = router.query

	const loadProjectHandler = () => {
		// load data...
		router.push({
			pathname: '/clients/[id]/[clientprojectid]',
			query: { id: 'max', clientprojectid: 'projecta' },
		})
	}

	return (
		<div>
			<h1>Client: {id}</h1>
			<button onClick={loadProjectHandler}>Button</button>
		</div>
	)
}

export default ClientProjectPage
