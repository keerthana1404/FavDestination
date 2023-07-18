import MobilePic from '@assets/UmegoAppMobilePic.png';
import Background from '@assets/Umego_web_tablet_background.png';
import Logo from '@assets/fav_destination_logo.png';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import Image from 'next/image';
import {
	DesktopLayoutBgImageContainerStyle,
	DesktopLayoutContainerStyle,
	DesktopLayoutLeftSideContainerStyle,
	DesktopLayoutRightSideContainerStyle,
} from './styles/DesktopLayoutStyles';
import { buttonStyle, iconStyle, orDevider } from './styles/SignUpFormStyles';

interface DesktopLayoutProps {
	component: () => JSX.Element;
}

const DesktopLayout = ({ component: Component }: DesktopLayoutProps) => {
	return (
		<>
			<Container maxWidth={'xl'} sx={DesktopLayoutContainerStyle}>
				<Box sx={DesktopLayoutBgImageContainerStyle}>
					<Image
						alt="bgImageRegistration"
						src={Background}
						style={{ width: '100%', height: '100%' }}
					/>
				</Box>
				<Box sx={DesktopLayoutLeftSideContainerStyle}>
					<Image
						src={MobilePic}
						alt={'Logo'}
						style={{
							height: 'auto',
							width: '100%',
						}}
					/>
				</Box>
				<Box sx={DesktopLayoutRightSideContainerStyle}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							height: '90vh',
							textAlign: 'center',
							mt: { md: 10 },
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								marginBottom: '1rem',
							}}
						>
							<Image
								src={Logo}
								width={200}
								alt={'Logo'}
								style={{ height: '100%' }}
							/>
						</Box>
						<Typography
							variant="h6"
							color="primary"
							sx={{
								textAlign: 'center',
								marginBottom: '1rem',
								fontSize: '14px',
							}}
						>
							By tapping Create Account or Sign In. You agree to
							our{' '}
							<Link href="">
								<b> Terms of use</b>
							</Link>
							. Learn how we process your data in our{' '}
							<Link href="">
								<b> Privary Policy </b>
							</Link>
							and{' '}
							<Link href="">
								<b> Cookies Policy</b>
							</Link>
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Button
								sx={buttonStyle}
								variant="outlined"
								color="primary"
							>
								<GoogleIcon style={iconStyle} />
								<span style={{ flexGrow: 1 }}>
									Sign Up with Google
								</span>
							</Button>
						</Box>
						<Box
							sx={{
								marginTop: '10px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Box sx={{ ...orDevider, mr: 1 }} />
							<Typography variant="h6" color="primary">
								OR
							</Typography>
							<Box sx={{ ...orDevider, ml: 1 }} />
						</Box>
						{/*  */}
						<Component />
						{/*  */}
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default DesktopLayout;
