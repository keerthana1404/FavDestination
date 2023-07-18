import Logo from '@assets/fav_destination_logo.png';
import { Box, Typography } from '@mui/material';
import { Formik } from 'formik';
import Image from 'next/image';
import * as Yup from 'yup';
import {
	BoxWrapper,
	ImageBoxWrapper,
} from '../styles/PasswordResetNForgotLayoutStyles';
import { resetPasswordForm } from '../types/userRegistrationType';
import ResetPasswordFormikFields from './ResetPasswordFormikFields';

const ResetPasswordForm = () => {
	const initialValue: resetPasswordForm = {
		password: '',
		confirmPassword: '',
	};

	const validationSchema = Yup.object({
		password: Yup.string()
			.min(8, 'Password must be at least 8 characters long')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
				'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
			)
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password')], 'Passwords must match')
			.required('Confirm password is required'),
	});

	const onSubmit = (values: resetPasswordForm, { resetForm }: any) => {
		console.log('Form data', values);
		resetForm({});
	};

	return (
		<>
			<BoxWrapper>
				<ImageBoxWrapper
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Image src={Logo} width={200} alt={'Logo'} />
				</ImageBoxWrapper>
				<Typography
					variant="h6"
					color="primary"
					sx={{
						textAlign: 'center',
						fontSize: '17px',
						fontWeight: 'bold',
					}}
				>
					Set your new password
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						width: '100%',
					}}
				>
					<Box
						sx={{
							width: { xs: '100%', sm: '500px' },
						}}
					>
						<Formik
							initialValues={initialValue}
							validationSchema={validationSchema}
							onSubmit={onSubmit}
						>
							{() => {
								return <ResetPasswordFormikFields />;
							}}
						</Formik>
					</Box>
				</Box>
			</BoxWrapper>
		</>
	);
};

export default ResetPasswordForm;
