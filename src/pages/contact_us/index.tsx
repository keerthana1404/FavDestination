import dynamic from 'next/dynamic';
const ContactUs = dynamic(() => import('@components/FooterPages/ContactUs'));

const ContactUsPage = () => {
	return (
		<>
			<ContactUs />
		</>
	);
};

export default ContactUsPage;
