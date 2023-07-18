import Background from '@assets/Umego_web_tablet_background.png';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import {
	baseContainerStyles,
	forgotNResetPasswordLayoutImageContainer,
} from './styles/ResetPasswordNForgotViewStyles';

interface ForgotNResetPasswordLayoutProps {
	component: () => JSX.Element;
}

const ForgotNResetPasswordLayout = ({
	component: Component,
}: ForgotNResetPasswordLayoutProps) => {
	return (
		<>
			<Container maxWidth="xl" style={baseContainerStyles}>
				<Box sx={forgotNResetPasswordLayoutImageContainer}>
					<Image
						alt="bgImageRegistration"
						src={Background}
						style={{ width: '100%', height: '100%' }}
					/>
				</Box>
				<Component />
			</Container>
		</>
	);
};

export default ForgotNResetPasswordLayout;
