import FormikControl from '@components/formik/FormikControl';
import { useToggle } from '@hooks/useToggle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { Form } from 'formik';
import { buttonStyle, textStyle } from '../../styles/SignUpFormStyles';

const SignUpFormikFIelds = () => {
	const [showPassword, setShowPassword] = useToggle(false);
	const [showConfirmPassword, setShowConfirmPassword] = useToggle(false);

	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword(!showConfirmPassword);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	return (
		<>
			<Form>
				<FormikControl
					control="input"
					margin="normal"
					sx={textStyle}
					required
					fullWidth
					id="username"
					label="Your full name"
					name="username"
					variant="filled"
					InputProps={{
						disableUnderline: true,
					}}
				/>
				<FormikControl
					control="input"
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
				/>
				<FormikControl
					control="input"
					margin="normal"
					required
					fullWidth
					sx={textStyle}
					name="password"
					label="Password"
					type={showPassword ? 'text' : 'password'}
					id="password"
					variant="filled"
					InputProps={{
						disableUnderline: true,
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
								>
									{showPassword ? (
										<VisibilityIcon />
									) : (
										<VisibilityOffIcon />
									)}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
				<FormikControl
					control="input"
					margin="normal"
					required
					fullWidth
					sx={textStyle}
					name="confirmPassword"
					label="Confirm Password"
					type={showConfirmPassword ? 'text' : 'password'}
					id="confirmPassword"
					variant="filled"
					InputProps={{
						disableUnderline: true,
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowConfirmPassword}
								>
									{showConfirmPassword ? (
										<VisibilityIcon />
									) : (
										<VisibilityOffIcon />
									)}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
				<Button
					sx={{
						...buttonStyle,
						fontWeight: 'bold',
						marginTop: '16px',
					}}
					color="primary"
					variant="contained"
					type="submit"
				>
					Create Account
				</Button>
			</Form>
		</>
	);
};

export default SignUpFormikFIelds;
