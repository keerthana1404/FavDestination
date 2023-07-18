import dynamic from 'next/dynamic';

const Success = dynamic(() => import('@components/Experiences/SuccessPage'));

const SuccessPage = () => {
	return (
		<>
			<Success />
		</>
	);
};

export default SuccessPage;
