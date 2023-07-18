import dynamic from 'next/dynamic';
const ComingSoon = dynamic(() => import('@components/ComingSoon'));

const CommunityPage = () => {
	return <ComingSoon />;
};

export default CommunityPage;

CommunityPage.FullWidthLayout = (page: React.ReactElement) => {
	return page;
};
