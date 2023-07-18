import dynamic from 'next/dynamic';
import React from 'react';

const SignIn = dynamic(() => import('@components/UserRegistration/SignIn'));

const SignInPage = () => {
	return (
		<>
			<SignIn />
		</>
	);
};

export default SignInPage;

SignInPage.FullWidthLayout = (page: React.ReactElement) => {
	return page;
};
