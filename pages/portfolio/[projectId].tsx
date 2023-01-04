import { useRouter } from 'next/router'

const ProjectPortfolioPage = () => {
	const router = useRouter()
	const { projectId } = router.query

	return (
		<div>
			<h1>Project Portfolio Page</h1>
			<h2>{projectId}</h2>
		</div>
	)
}

export default ProjectPortfolioPage
