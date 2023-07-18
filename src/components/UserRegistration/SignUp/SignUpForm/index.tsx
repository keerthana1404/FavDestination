import { userRegistrationForm } from '@components/UserRegistration/types/userRegistrationType';
import { Link, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import SignUpFormikFIelds from './SignUpFormikFIelds';

const SignUpForm = () => {
	const router = useRouter();

	const initialValue: userRegistrationForm = {
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const validationSchema = Yup.object({
		username: Yup.string().required('Username is required'),
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
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password')], 'Passwords must match')
			.required('Confirm password is required'),
	});

	const onSubmit = (values: userRegistrationForm, { resetForm }: any) => {
		console.log('Form data', values);
		resetForm({});
	};

	const redirectToSignIn = () => {
		router.push('/signin');
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
						<SignUpFormikFIelds />
						<Typography
							variant="h6"
							color="primary"
							sx={{
								textAlign: 'center',
								fontSize: '14px',
								marginTop: '8px',
							}}
						>
							<Link
								variant="body2"
								onClick={redirectToSignIn}
								sx={{ cursor: 'pointer' }}
							>
								{"Already't have an account? Sign In"}
							</Link>
						</Typography>
					</>
				);
			}}
		</Formik>
	);
};

export default SignUpForm;
