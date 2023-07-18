import UmegoBannerEmailFooter from '@assets/UmegoBannerEmailFooter.png';
import { Box, Button, TextField } from '@mui/material';
import Image from 'next/image';
import {
	StyledEmailFooterText,
	StyledEmailFooterTextH6,
	StyledLineContainer,
	StylesEmailAddressContainer,
	StylesEmailFooterBackground,
	StylesEmailFooterContent,
	buttonStyle,
	textStyle,
} from './styles/EmailFooterStyles';
const EmailFooter = () => {
	return (
		<>
			<Box mt={4} sx={{ position: 'relative' }}>
				<Box sx={StylesEmailFooterBackground}>
					<Image
						alt="bgImageRegistration"
						src={UmegoBannerEmailFooter}
						style={{ width: '100%', height: '100%' }}
					/>
				</Box>
				<Box sx={StylesEmailFooterContent} p={2}>
					<StyledEmailFooterText
						variant="h4"
						sx={{ fontSize: { xs: '25px', md: '30px' } }}
					>
						Love Offers And Discounts?
						<br></br>
						Subscribe and Save.
					</StyledEmailFooterText>
					<StyledLineContainer sx={{ marginTop: '10px' }}>
						<Box
							sx={{
								borderBottom: '2px solid #FFFFFF',
								width: '150px',
							}}
						/>
					</StyledLineContainer>
					<StyledLineContainer
						sx={{ marginTop: '4px', marginBottom: '10px' }}
					>
						<Box
							sx={{
								borderBottom: '2px solid #FFFFFF',
								width: '75px',
							}}
						/>
					</StyledLineContainer>
					<StyledEmailFooterTextH6>
						Don’t worry, we won’t need your cards details. Just
						enter your email address
						<br></br>
						And we’ll take care of the rest.
					</StyledEmailFooterTextH6>
					<Box sx={StylesEmailAddressContainer}>
						<TextField
							sx={textStyle}
							fullWidth
							id="email"
							name="email"
							type="email"
							placeholder="Enter your Email Address"
							autoComplete="fullName"
							variant="filled"
							InputProps={{
								disableUnderline: true,
							}}
							autoFocus
						/>
						<Button sx={buttonStyle} variant="contained">
							Subscribe
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default EmailFooter;
