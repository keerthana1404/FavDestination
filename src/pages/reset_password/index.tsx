import dynamic from 'next/dynamic';

const ResetPassword = dynamic(
	() => import('@components/UserRegistration/ResetPassword'),
);

const ResetPasswordPage = () => {
	return (
		<>
			<ResetPassword />
		</>
	);
};

export default ResetPasswordPage;

ResetPasswordPage.FullWidthLayout = (page: React.ReactElement) => {
	return page;
};
