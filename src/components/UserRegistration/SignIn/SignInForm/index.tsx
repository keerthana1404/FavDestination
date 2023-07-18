import { userLoginForm } from '@components/UserRegistration/types/userRegistrationType';
import { Link, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import SignInFormikFields from './SignInFormikFields';

const SignInForm = () => {
	const router = useRouter();

	const initialValue: userLoginForm = {
		email: '',
		password: '',
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Please enter a valid email address')
			.required('Email is required'),
		password: Yup.string()
			.min(8, 'Password must be at least 8 characters long')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
				'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
			)
			.required('Password is required'),
	});

	const onSubmit = (values: userLoginForm, { resetForm }: any) => {
		console.log('Form data', values);
		resetForm({});
	};

	const redirectToSignUp = () => {
		router.push('/signup');
	};

	return (
		<Formik
			initialValues={initialValue}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{() => {
				return (
					<>
						<SignInFormikFields />
						<Typography
							variant="h6"
							color="primary"
							sx={{
								textAlign: 'center',
								fontSize: '14px',
							}}
						>
							<Link
								variant="body2"
								onClick={redirectToSignUp}
								sx={{ cursor: 'pointer' }}
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Typography>
					</>
				);
			}}
		</Formik>
	);
};

export default SignInForm;
