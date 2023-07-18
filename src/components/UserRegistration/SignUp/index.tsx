import { useMediaQuery, useTheme } from '@mui/material';
import DesktopLayout from '../DesktopLayout';
import MobileLayout from '../MobileLayout';
import SignUpForm from './SignUpForm';

const SignUp = () => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: false,
	});

	const SignUpView = isDesktop ? (
		<DesktopLayout component={SignUpForm} />
	) : (
		<MobileLayout component={SignUpForm} />
	);
	return <>{SignUpView}</>;
};

export default SignUp;
