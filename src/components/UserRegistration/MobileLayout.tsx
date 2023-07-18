import Background from '@assets/Umego_web_tablet_background.png';
import Logo from '@assets/fav_destination_logo.png';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import Image from 'next/image';
import {
	MobileLayoutContainerStyles,
	MobileLayoutGoogleButtonContainerStyles,
	MobileLayoutLogoContainerStyles,
	MobileLayoutORLayoutContainerStyles,
} from './styles/MobileLayoutStyles';
import { buttonStyle, iconStyle, orDevider } from './styles/SignUpFormStyles';
interface MobileLayoutProps {
	component: () => JSX.Element;
	paddingTop?: number;
}

const MobileLayout = ({ component: Component }: MobileLayoutProps) => {
	return (
		<>
			<Container maxWidth="xl" sx={MobileLayoutContainerStyles}>
				<Box
					style={{
						position: 'absolute',
						zIndex: -1,
						height: '100%',
						top: 0,
						left: 0,
						overflow: 'hidden',
					}}
				>
					<Image
						alt="bgImageRegistration"
						src={Background}
						style={{ width: '100%' }}
					/>
				</Box>
				<Box sx={MobileLayoutLogoContainerStyles}>
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
					By tapping Create Account or Sign In. You agree to our{' '}
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
				<Box sx={MobileLayoutGoogleButtonContainerStyles}>
					<Button sx={buttonStyle} variant="outlined" color="primary">
						<GoogleIcon style={iconStyle} />
						<span style={{ flexGrow: 1 }}>Sign Up with Google</span>
					</Button>
				</Box>
				<Box sx={MobileLayoutORLayoutContainerStyles}>
					<Box sx={{ ...orDevider, mr: 1 }} />
					<Typography variant="h6" color="primary">
						OR
					</Typography>
					<Box sx={{ ...orDevider, ml: 1 }} />
				</Box>
				{/*  */}
				<Component />
				{/*  */}
			</Container>
		</>
	);
};

export default MobileLayout;
