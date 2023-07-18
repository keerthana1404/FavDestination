import dynamic from 'next/dynamic';
const ComingSoon = dynamic(() => import('@components/ComingSoon'));

const PeoplePage = () => {
	return <ComingSoon />;
};

export default PeoplePage;

PeoplePage.FullWidthLayout = (page: React.ReactElement) => {
	return page;
};
