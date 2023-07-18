import dynamic from 'next/dynamic';

const BecomeAVendor = dynamic(
	() => import('@components/FooterPages/BecomeAVendor'),
);

const BecomeAVendorPage = () => {
	return (
		<>
			<BecomeAVendor />
		</>
	);
};

export default BecomeAVendorPage;
