import FormikControl from '@components/formik/FormikControl';
import { useToggle } from '@hooks/useToggle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { Form } from 'formik';
import { buttonStyle, textStyle } from './styles/ResetPasswordForm';

const ResetPasswordFormikFields = () => {
	const [showPassword, setShowPassword] = useToggle(false);
	const [showConfirmPassword, setShowConfirmPassword] = useToggle(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword(!showConfirmPassword);
	return (
		<>
			<Form
				style={{
					width: '100%',
				}}
			>
				<FormikControl
					control="input"
					margin="normal"
					required
					fullWidth
					sx={textStyle}
					name="password"
					label="New password"
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
					margin="normal"
					control="input"
					required
					fullWidth
					sx={textStyle}
					name="confirmPassword"
					label="Confirm password"
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
						marginTop: '20px',
					}}
					color="primary"
					variant="contained"
					type="submit"
				>
					Reset Password
				</Button>
			</Form>
		</>
	);
};

export default ResetPasswordFormikFields;
