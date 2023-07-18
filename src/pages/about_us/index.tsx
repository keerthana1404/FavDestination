import AboutUs from '@components/FooterPages/AboutUs';
import { TopSpacing } from '@styles/globalMuiStyles';

const AboutUsPage = () => {
	return (
		<>
			<TopSpacing />
			<AboutUs />
		</>
	);
};

export default AboutUsPage;

AboutUsPage.FullWidthLayout = (page: React.ReactElement) => {
	return page;
};
