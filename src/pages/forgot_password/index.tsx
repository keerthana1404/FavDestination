import dynamic from 'next/dynamic';

const ForgotPassword = dynamic(
	() => import('@components/UserRegistration/ForgotPassword'),
);

const forgotPasswordPage = () => {
	return (
		<>
			<ForgotPassword />
		</>
	);
};

export default forgotPasswordPage;

forgotPasswordPage.FullWidthLayout = (page: React.ReactElement) => {
	return page;
};
