import FacebookImage from '@assets/facebook.svg';
import InstagramImage from '@assets/instagram.svg';
import LinkedInImage from '@assets/linkedin.svg';
import MusicImage from '@assets/music.svg';
import SubscribeImage from '@assets/subscribe.svg';
import SuccessImage from '@assets/success.svg';
import TwitterImage from '@assets/twitter.svg';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import {
	Frame,
	FrameOther,
	SignupTextStyle,
	SubcribeBox,
	SubcribeIconFrame,
	SubscribeButtonStyle,
	SubscribeInputBox,
	SuccesPageExploreTextStyle,
	SuccessPageBoxContainer,
	SuccessPageExploringButton,
	SuccessPageFollowTextStyle,
	SuccessPageFollowUsBox,
	SuccessPageIconFrame,
	SuccessPageMainTextStyle,
	SuccessPageSubTextStyle,
} from './styles/SuccessPageStyle';

const SuccessPage = () => {
	return (
		<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
			<Stack sx={SuccessPageBoxContainer}>
				<Box>
					<Image src={SuccessImage} alt={'success-logo'} />
				</Box>
				<Typography sx={SuccessPageMainTextStyle}>
					THANK YOU FOR YOUR PURCHACE
				</Typography>
				<Typography sx={SuccessPageSubTextStyle}>
					{`We've sent a confirmation email with details to
					mailto:xxx@xxx.com`}
				</Typography>
				<Button sx={SuccessPageExploringButton}>
					<Typography sx={SuccesPageExploreTextStyle}>
						Continue Exploring
					</Typography>
				</Button>
				<Box sx={SuccessPageFollowUsBox}>
					<Typography sx={SuccessPageFollowTextStyle}>
						Follow us
					</Typography>
					<Stack direction={'row'} sx={SuccessPageIconFrame}>
						{/* <Image src={facebookIcon} alt="facebook-icon" /> */}
						<Box sx={Frame}>
							<Image
								src={FacebookImage}
								alt="facebook"
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									margin: '9px',
								}}
							/>
						</Box>
						<Box sx={FrameOther}>
							<Image
								src={InstagramImage}
								alt="InstagramImage"
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									margin: '9px',
								}}
							/>
						</Box>
						<Box sx={FrameOther}>
							<Image
								src={TwitterImage}
								alt="TwitterImage"
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									margin: '9px',
								}}
							/>
						</Box>
						<Box sx={FrameOther}>
							<Image
								src={LinkedInImage}
								alt="LinkedInImage"
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									margin: '9px',
								}}
							/>
						</Box>
						<Box sx={FrameOther}>
							<Image
								src={MusicImage}
								alt="MusicImage"
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									margin: '9px',
								}}
							/>
						</Box>
					</Stack>
				</Box>
				<Stack sx={SubcribeBox}>
					<Box sx={SubcribeIconFrame}>
						<Image src={SubscribeImage} alt="facebook" />
					</Box>
					<Typography sx={SignupTextStyle}>
						Sign up for exclusive access to our experiences before
						they hit our site! And discount codes? We’ve got those,
						too.
					</Typography>
					<Stack
						sx={{
							position: 'relative',
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							mb: 3,
						}}
					>
						<TextField
							id="outlined-basic"
							label="Enter your Email Address"
							variant="filled"
							size="small"
							sx={SubscribeInputBox}
							InputProps={{
								disableUnderline: true,
							}}
						/>
						<Button sx={SubscribeButtonStyle}>Subscribe Now</Button>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default SuccessPage;
