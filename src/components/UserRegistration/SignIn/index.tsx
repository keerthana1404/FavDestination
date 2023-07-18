import { useMediaQuery, useTheme } from '@mui/material';
import DesktopLayout from '../DesktopLayout';
import MobileLayout from '../MobileLayout';
import SignInForm from './SignInForm';

const SignIn = () => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

	const SignUpView = isDesktop ? (
		<DesktopLayout component={SignInForm} />
	) : (
		<MobileLayout component={SignInForm} />
	);
	return <>{SignUpView}</>;
};

export default SignIn;
