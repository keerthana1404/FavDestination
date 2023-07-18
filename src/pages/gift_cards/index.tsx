import dynamic from 'next/dynamic';
const GiftCards = dynamic(() => import('@components/FooterPages/GiftCards'));

const GiftCardsPages = () => {
	return (
		<>
			<GiftCards />
		</>
	);
};

export default GiftCardsPages;
