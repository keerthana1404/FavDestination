import dynamic from 'next/dynamic';
const AboutUsBottomInfo = dynamic(() => import('./AboutUsBottomInfo'));
const AboutUsContent = dynamic(() => import('./AboutUsContent'));
import { AboutUsData } from './constants/AboutUsData';

const AboutUs = () => {
	return (
		<>
			{AboutUsData.map((item) => {
				return (
					<AboutUsContent key={`AboutUsData-${item.id}`} {...item} />
				);
			})}
			<AboutUsBottomInfo />
		</>
	);
};

export default AboutUs;
