import FooterSubscribeImage from '@assets/FooterSubscribeImage.jpg';
import { StyledMainHeading } from '@components/styles/ComponentsStyles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
	Box,
	Button,
	Container,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import {
	FooterSubscribeComponentBoxContentStyle,
	FooterSubscribeComponentBoxStyle,
	FooterSubscribeComponentSubscribeButtonStyle,
	FooterSubscribeComponentTextFieldStyle,
	StyledFilterButtonBaseImage,
} from './styles/FooterStyles';

const FooterSubscribeComponent = () => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<>
			<Box sx={FooterSubscribeComponentBoxStyle}>
				<StyledFilterButtonBaseImage
					src={FooterSubscribeImage}
					alt="footerbgImage"
					sx={{ width: { xs: '1500', xl: '100%' } }}
				/>
				<Stack sx={FooterSubscribeComponentBoxContentStyle}>
					<Container
						maxWidth="xl"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<StyledMainHeading
							variant="h4"
							sx={{ color: 'white', textAlign: 'center' }}
						>
							No Spam, Just Experiences
						</StyledMainHeading>
						<Typography
							variant="body1"
							sx={{
								color: 'white',
								textAlign: 'center',
							}}
						>
							Sign up for exclusive access to our experiences
							before they hit our site! And discount codes? We’ve
							got those, too.
						</Typography>
						<TextField
							placeholder="Email"
							size="small"
							onChange={handleChange}
							value={inputValue}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<MailOutlineIcon color="secondary" />
									</InputAdornment>
								),
								endAdornment: (
									<Button
										color="secondary"
										sx={
											FooterSubscribeComponentSubscribeButtonStyle
										}
									>
										Subscribe
									</Button>
								),
							}}
							sx={FooterSubscribeComponentTextFieldStyle}
						/>
					</Container>
				</Stack>
			</Box>
		</>
	);
};

export default FooterSubscribeComponent;
