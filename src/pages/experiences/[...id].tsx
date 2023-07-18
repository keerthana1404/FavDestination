import dynamic from 'next/dynamic';

const ExperienceItemDetail = dynamic(
	() => import('@components/Experiences/ExperienceItemDetail'),
);

const ExperienceDetailsPage = () => {
	return (
		<>
			<ExperienceItemDetail />
		</>
	);
};

export default ExperienceDetailsPage;
