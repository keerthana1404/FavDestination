import Logo from '@assets/fav_destination_logo.png';
import { Box, Button, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import {
	BoxWrapper,
	ImageBoxWrapper,
} from '../styles/PasswordResetNForgotLayoutStyles';
import { buttonStyle, textStyle } from './styles/ForgotPassword';

const ForgotPasswordForm = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
		});
	};

	return (
		<BoxWrapper>
			<ImageBoxWrapper
				sx={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '1rem',
				}}
			>
				<Image src={Logo} width={200} alt={'Logo'} />
			</ImageBoxWrapper>
			<Typography
				variant="h6"
				color="primary"
				sx={{
					textAlign: 'center',
					marginBottom: '1rem',
					fontSize: '17px',
					fontWeight: 'bold',
				}}
			>
				Please enter the email associated with your account. We will
				send a redirect link to that email.
			</Typography>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<TextField
					margin="normal"
					sx={textStyle}
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					type="email"
					autoComplete="email"
					variant="filled"
					InputProps={{
						disableUnderline: true,
					}}
					autoFocus
				/>
				<Button
					sx={{
						...buttonStyle,
						fontWeight: 'bold',
						marginTop: '20px',
					}}
					color="primary"
					variant="contained"
					type="submit"
				>
					Continue
				</Button>
			</Box>
		</BoxWrapper>
	);
};

export default ForgotPasswordForm;
