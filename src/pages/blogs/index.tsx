import dynamic from 'next/dynamic';

const Blogs = dynamic(() => import('@components/FooterPages/Blogs'));

const BlogsPage = () => {
	return (
		<>
			<Blogs />
		</>
	);
};

export default BlogsPage;
