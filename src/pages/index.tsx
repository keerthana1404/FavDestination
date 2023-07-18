import EmailFooter from '@components/Experiences/EmailFooter';
import ExperienceProducts from '@components/Experiences/ExperienceProducts';
import dynamic from 'next/dynamic';
import { memo, useState } from 'react';

const ExperiencesCategorie = dynamic(
	() => import('@components/Experiences/categories'),
);
const ExperiencesBanner = dynamic(
	() => import('@components/Experiences/ExperiencesBanner'),
);

const HomePage = () => {
	const [categoryName, setCategoryName] = useState('Trending Now');
	return (
		<>
			<ExperiencesCategorie
				categoryName={categoryName}
				setCategoryName={setCategoryName}
			/>
			<ExperiencesBanner />
			<ExperienceProducts />
			<EmailFooter />
		</>
	);
};

export default memo(HomePage);
