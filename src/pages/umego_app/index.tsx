import dynamic from 'next/dynamic';

const UmegoApp = dynamic(() => import('@components/FooterPages/UmegoApp'));

const UmegoAppPages = () => {
	return (
		<>
			<UmegoApp />
		</>
	);
};

export default UmegoAppPages;
