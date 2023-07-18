import { reviews } from '../constants/ProductDetailDataNew';

import ReviewCard from './ReviewCard';

const ReviewsList = () => {
	return (
		<>
			{reviews.map((review) => (
				<ReviewCard
					key={review._id}
					name={review.name}
					createdAt={review.createdAt}
					rating={review.rating}
					comment={review.comment}
				/>
			))}
		</>
	);
};

export default ReviewsList;
