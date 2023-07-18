import BlogData from '../constants/blog_data.json';
import BlogCard from './BlogCard';

const BlogCardWrapper = () => {
	return (
		<>
			{BlogData.map((card) => (
				<BlogCard key={card.id} {...card} />
			))}
		</>
	);
};

export default BlogCardWrapper;
