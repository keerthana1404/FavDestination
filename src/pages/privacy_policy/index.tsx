import dynamic from 'next/dynamic';
const PrivacyPolicy = dynamic(
	() => import('@components/FooterPages/PrivacyPolicy'),
);

const PrivacyPolicyPage = () => {
	return (
		<>
			<PrivacyPolicy />
		</>
	);
};

export default PrivacyPolicyPage;
