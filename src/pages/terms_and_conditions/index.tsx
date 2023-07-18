import dynamic from 'next/dynamic';
const TermsAndConditions = dynamic(
	() => import('@components/FooterPages/TermsAndConditions'),
);

const TermsAndConditionsPage = () => {
	return (
		<>
			<TermsAndConditions />
		</>
	);
};

export default TermsAndConditionsPage;
