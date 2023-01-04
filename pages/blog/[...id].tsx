import { useRouter } from 'next/router'

const BlogPage = () => {
	const router = useRouter()
	console.log(router.query)

	return (
		<div>
			<h2>Blog: {} </h2>
		</div>
	)
}

export default BlogPage
