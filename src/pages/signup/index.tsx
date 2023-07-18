import dynamic from 'next/dynamic';

const SignUp = dynamic(() => import('@components/UserRegistration/SignUp'));

const SignUpPage = () => {
	return (
		<>
			<SignUp />
		</>
	);
};

export default SignUpPage;

SignUpPage.FullWidthLayout = (page: React.ReactElement) => {
	return page;
};
