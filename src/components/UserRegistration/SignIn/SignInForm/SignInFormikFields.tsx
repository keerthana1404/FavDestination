import FormikControl from '@components/formik/FormikControl';
import { useToggle } from '@hooks/useToggle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, IconButton, InputAdornment, Link } from '@mui/material';
import { Form } from 'formik';
import { useRouter } from 'next/router';
import { buttonStyle, textStyle } from '../../styles/SignInFormStyles';

const SignInFormikFields = () => {
	const router = useRouter();

	const [showPassword, setShowPassword] = useToggle(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const redirectToForgotPassword = () => {
		router.push('/forgot_password');
	};

	return (
		<>
			<Form>
				<FormikControl
					color="secondary"
					control="input"
					type="email"
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					sx={{ ...textStyle }}
					margin="normal"
					variant="filled"
				/>
				<FormikControl
					margin="normal"
					control="input"
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
				<Link
					variant="body2"
					onClick={redirectToForgotPassword}
					sx={{
						textAlign: 'right',
						cursor: 'pointer',
					}}
				>
					Forgot password?
				</Link>
				<Button
					sx={{
						...buttonStyle,
						fontWeight: 'bold',
						mt: 1,
					}}
					color="primary"
					variant="contained"
					type="submit"
				>
					Log In
				</Button>
			</Form>
		</>
	);
};

export default SignInFormikFields;
