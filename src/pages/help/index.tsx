import dynamic from 'next/dynamic';

const Help = dynamic(() => import('@components/FooterPages/Help'));

const index = () => {
	return (
		<>
			<Help />
		</>
	);
};

export default index;
